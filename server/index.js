const app = require('express')()
const server = require('http').Server
const io = require('socket.io')(server)
const ChatSocket = require('./helperFunctions')


io.on('connection', ChatSocket);

app.listen('8080', () => {
    console.log('server is running on port: ', port)
})