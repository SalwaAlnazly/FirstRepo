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

/**
 * Remove user from the list passed in
 * @param userList {object} Object with key value pairs of users
 * @param username {string} name of user to be removed
 * @return userList {Object} Object with key value pairs of Users
 */

 function removeUser (userList, username) {
     let newList = Object.assign({}, userList)
     delete newList[username]
     return newList
 }

/**
 * Check if the user is in list passed in 
 * @param userList {object} Object with key value pairs of users
 * @param username {string}
 * @return userList {Object} Object with key value pairs of Users
 * 
 */
function isUser(userList, username) {
   return username in userList
}