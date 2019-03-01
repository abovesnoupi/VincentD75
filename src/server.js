
const socketIO = require("socket.io");
const nano = require('nano')('http://localhost:5984');

const db = nano.use('vincentd75');
const io = socketIO.listen(42069);

const seedrandom = require('seedrandom');

const avatars = [
  'https://picturepan2.github.io/spectre/img/avatar-1.png',
  'https://picturepan2.github.io/spectre/img/avatar-2.png',
  'https://picturepan2.github.io/spectre/img/avatar-3.png',
  'https://picturepan2.github.io/spectre/img/avatar-4.png',
  'https://picturepan2.github.io/spectre/img/avatar-5.png'
]

const getAvatar = (userName) => avatars[Math.floor(seedrandom(userName)() * avatars.length)]

io.on("connection", (socket) => {


  socket.on('login', (userName, reply) => {

    const avatar = getAvatar(userName)

    socket.userName = userName
    socket.avatar = avatar

    // Envoyer les salles aux client
    db.view('rooms', 'by-createdAt', {descending: true})
    .then(data => data.rows.map(room => room.value))
    .then(rooms => socket.emit('send rooms', rooms));

    const users = Object.keys(io.sockets.sockets).map(socketId => ({
      userName: io.sockets.sockets[socketId].userName,
      avatar
    }))

    io.emit('send users', users);


    reply({
      userName,
      avatar
    })
  })


  socket.on('switch room', ({roomToJoin, roomToLeave}, reply) => {

    // Gestion des salles dans socket.io
    socket.leave(roomToLeave);
    socket.join(roomToJoin);
    
    // Envoyer les messages de la salle au client
    db.view('messages', 'by-createdAt', {descending: true})
    .then(data => data.rows.map(message => message.value))
    .then(messages => messages.filter(message => message.room === roomToJoin))
    .then(reply);
  });

  socket.on('new message', ({roomId, message}) =>
    db.insert({
      ...message,
      type: 'message',
      room: roomId,
      createdAt: new Date().toISOString()
    })
    .then(res => db.get(res.id))
    .then(message => io.in(roomId).emit('new message', message))
  );


  socket.on('new room', (roomName) =>
    db.insert({
      type: 'room',
      _id: roomName,
      title: roomName,
      createdAt: new Date().toISOString()
    })
    .then(res => db.view('rooms', 'by-createdAt', {descending: true}))
    .then(data => data.rows.map(room => room.value))
    .then(rooms => io.emit('send rooms', rooms))
  );

})

console.log('Server started');