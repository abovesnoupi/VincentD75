
const io = require("socket.io");
const nano = require('nano')('http://localhost:5984');

const db = nano.use('vincentd75');

const sockets = io.listen(42069);

sockets.on("connection", (socket) => {

  // Envoyer les salles aux client
  db.view('rooms', 'by-created', {descending: true})
    .then(rooms => socket.emit('send rooms', rooms))

    
  //
  socket.on('new message', message => {
    socket.broadcast.emit('new message', message);
  });

})
