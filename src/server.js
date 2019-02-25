
const socketIO = require("socket.io");
const nano = require('nano')('http://localhost:5984');

const db = nano.use('vincentd75');

const io = socketIO.listen(42069);

io.on("connection", (socket) => {

  // Envoyer les salles aux client
  db.view('rooms', 'by-createdAt', {descending: true})
    .then(rooms => socket.emit('send rooms', rooms))

  // // Envoyer les messages aux client
  // db.view('messages', 'by-created', {descending: true})
  //   .then(messages => socket.emit('send messages', messages))


  socket.on('switch room', ({roomToJoin, roomToLeave}, reply) => {

    // Gestion des salles dans socket.io
    socket.leave(roomToLeave);
    socket.join(roomToJoin);
    
    // Envoyer les messages de la salle au client
    db.view('messages', 'by-createdAt', {descending: true})
      .then(reply);
  });

  socket.on('new message', ({roomId, message}) => {
    db.insert({
      ...message,
      type: 'message',
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