
const io = require("socket.io");

const sockets = io.listen(42069);

sockets.on("connection", (socket) => {

    socket.on('new message', message => {
        socket.broadcast.emit('new message', message);
    });

})
