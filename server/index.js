const app = require('express')();
const http = require('http').Server(app)
const io = require('socket.io')(http);

const ChatSocket = require('./helperFunctions')

io.on('connection', ChatSocket);

http.listen(8080, () => {
	console.log("Server is running on http://localhost:8080");
})
