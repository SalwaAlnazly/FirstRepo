const Message = require('../models/messages')

module.exports = (io, client) => {
  client.on('fetchUserUrl', id => {
    const userID = id.split('/')

    Message.find({
      $or: [{ userId: userID[1] },
      { author: userID[1] }
      ]
    }, (err, messages) => {
      if (err) {
        console.log(err);
      }
      if (messages) {
        console.log("messages", messages);
        client.emit('loadAdminMessages', messages)
      }
    })
  })

  client.on('message', ({ author, id, body }) => {
    console.log("author, id, body ", author, id, body);

    try {
      const newMessage = new Message({
        userId: id,
        author,
        body
      })
      newMessage.save((err, newMessage) => {

        if (err) throw err
        client.to(`${id}`).emit('message', newMessage)
      });
    } catch (err) {
      client.emit('error', { status: false, message: err.message })
    }
  })
}



