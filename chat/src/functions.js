const uuidv4 = require('uuid/v4');

/** create a user  */
const createUser = ({name = ""} = {}) => ({
       id: uuidv4(),
       name
})

const createMessage = ({message = "", sender= ""} = {}) => ({
    id: uuidv4(),
    time: new Date(Date.now()),
    message,
    sender
})

module.exports = {
    createUser,
    createMessage
}