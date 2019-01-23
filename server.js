const app = require('express')();
const http = require('http').Server(app)
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

io.sockets.on('connection', (socket) => {
    socket.on("send message", (newMsg) => {
        io.sockets.emit("new message", newMsg)
        socket.broadcast.emit("new message", newMsg)
    })
}) 

http.listen(3000, () => {
    console.log('Server is running on port :3000')
})