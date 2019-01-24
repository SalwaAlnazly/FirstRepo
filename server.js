const app = require('express')();
const server = require('http').Server(app)
const io = require('socket.io')(server);

app.get('/' , (req,res)=>{
    res.sendFile(__dirname+'/index.html');
})


io.on('connection', (socket) => { 
    socket.on('send message', newMsg => {
        socket.emit("new message", newMsg)
        socket.broadcast.emit("new message", newMsg)
    })
}) 

server.listen(3000, () => {
    console.log('Server is running on port :3000')
})