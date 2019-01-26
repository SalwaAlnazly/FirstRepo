const uuidv4 = require('uuid/v4');

/** create a user  */
const createUser = ({ name = "" } = {}) => ({
    id: uuidv4(),
    name
})

/** create a message object  */
const createMessage = ({ message = "", sender = "" } = {}) => ({
    id: uuidv4(),
    time: getTime(new Date(Date.now())),
    message,
    sender
})

/** create a chat object */
const createChat = ({messages = [], name="community", users=[]} = {}) => ({
    id: uuidv4(),
    messages,
    name,
    users,
    typingUsers: []
})

/** getTime() return string represented in 24hr time i.e. '20:15'  */
const getTime = (date) => {
    return `${date.getHours()}: ${("0".getMinutes()).slice(-2)}`
}

module.exports = {
    createUser,
    createMessage,
    createChat
}