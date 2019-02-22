import socketIOClient from "socket.io-client";
const ioMessagesUrl = 'http://127.0.0.1:8000/messages';
const io = socketIOClient(ioMessagesUrl)

const ioCustomerMessages = 'http://127.0.0.1:8080/messages'
const ioSocket = socketIOClient(ioCustomerMessages)

export const onOpenConnection = user =>io.emit('adminOpenConnection' , user )

export const fetchUserUrl = userId => ioSocket.emit('fetchUserUrl', userId)
export const onLoadAdminMessages = cb => ioSocket.on('loadAdminMessages', cb)
export const onSendMessage = message => ioSocket.emit('message', message)

io.on('error' , error => alert(error.message))


