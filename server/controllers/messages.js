const Message = require('../models/messages')

module.exports = (io, client) => {
  client.on('fetchUserUrl', id => {
    const userID = id.split('/')

    Message.find({ $or: [{ userId: userID[1] }, { author: userID[1] }] })
      .then(messages => {
        client.emit('loadAdminMessages', messages)
      })
      .catch(err => {
        throw err
      })
  })

  client.on('message', ({ author, id, body }) => {

    const newMessage = new Message({
      userId: id,
      author,
      body
    })
    newMessage.save()
      .then(newMessage => {
        console.log("newMessage", newMessage);
        client.to(`${newMessage.userId}`).emit('message', newMessage)
      })
      .catch(err => {
        client.emit('error', { status: false, message: err.message })
      })

  })
}



