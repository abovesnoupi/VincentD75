
const socketIO = require("socket.io");
const nano = require('nano')('http://localhost:5984');

const db = nano.use('vincentd75');
const io = socketIO.listen(42069);



io.on("connection", (socket) => {


  socket.on('login', (userName, reply) => {

    socket.userName = userName
    
    // Envoyer les salles aux client
    db.view('rooms', 'by-createdAt', {descending: true})
      .then(data => data.rows.map(room => room.value))
      .then(reply);

    const users = Object.keys(io.sockets.sockets).map(socketId => ({
      userName: io.sockets.sockets[socketId].userName,
      socketId
    }))

    io.emit('send users', users);
  })

  // // Envoyer les messages aux client
  // db.view('messages', 'by-created', {descending: true})
  //   .then(messages => socket.emit('send messages', messages))


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

  socket.on('new message', ({roomId, message}) => {
    db.insert({
      ...message,
      type: 'message',
      room: roomId,
      createdAt: new Date().toISOString()
    })
      .then(res => {
        db.get(res.id)
          .then(message => {
            io.in(roomId).emit('new message', message);
          })
      })
  });

})

console.log('Server started');