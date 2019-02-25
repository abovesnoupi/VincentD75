
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
    
  //
  socket.on('new message', message => {
    socket.broadcast.emit('new message', message);
  });

})

console.log('Server started');