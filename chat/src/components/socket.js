import socketIOClient from "socket.io-client";
const ioMessagesUrl = 'http://127.0.0.1:8000/messages';

const io = socketIOClient(ioMessagesUrl)
var start = false

export const init = () => {
    start = true
}

export const onOpenConnection = user =>io.emit('adminOpenConnection' , user )


io.on('error' , error => alert(error.message))


