const io = require('./index.js')
const { VERIFY_USER, USER_CONNECTED, LOGOUT } = require("../chat/src/Events")
const { createUser, createMessage, createChat } = require("../chat/src/factories")

let connectedUsers = {}

module.exports = (socket) => {
    console.log("Socket Id" + socket.id);
    /** Verify username */
    socket.on('VERIFY_USER', (callback) => {
        console.log(';;;;;;;;;;;;;', callback);
        
        if (isUser(connectedUsers, nickname)) {
            callback({ isUser: true, user: null })
        } else {
            callback({ isUser: false, user: createUser({ name: nickname }) })
        }
    });

    /** User connects with username */
    socket.on('USER_CONNECTED', (user) => {   
        connectedUsers = addUser(connectedUsers, user)
        socket.user = user
        io.emit('USER_CONNECTED', connectedUsers)
        console.log("connectedUsers", connectedUsers);
        
    })

    /** User disconnects */
}

/**
 * Adds user to list passed in
 * @param userList {object} Object with key value pairs of users
 * @param user {User} the user to added to the list
 * @return userList {Object} Object with key value pairs of Users
 */
function addUser(userList, user) {
    let newList = Object.assign({}, userList)
    newList[user.name] = user
    return newList
}

/**
 * Remove user from the list passed in
 * @param userList {object} Object with key value pairs of users
 * @param username {string} name of user to be removed
 * @return userList {Object} Object with key value pairs of Users
 */

function removeUser(userList, username) {
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