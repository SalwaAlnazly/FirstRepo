const io = require('./index.js')
const { VERIFY_USER, USER_CONNECTED, LOGOUT } = require("../Events")
const { createUser, createMessage, createChat } = require("../factories")

const connectedUser = {}

module.exports = (socket) => {
    console.log("Socket Id" + socket.id);

    /** Verify username */
    socket.on(VERIFY_USER, (callback) => {
        if (isUser(connectedUser, nickname)) {
            callback({ isUser: true, user: null })
        } else {
            callback({ isUser: false, user: createUser({ name: nickname }) })
        }
    });

    /** User connects with username */
}



function isUser(userList, username) {

}