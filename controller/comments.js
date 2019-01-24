const comments = [{
    user: 'salwa',
    comment: 'Good one, keep a head'
},
{
    user: 'ali',
    comment: 'Thanks'
}]

module.exports = (socket) => {
    let i = 0;
    const addingComments = setInterval(() => {
        if (comments[i]) {
            socket.emit('comment.add', comments[i])
            socket.emit('comment.count', { count: i + 1 })

            i++;
        } else {
            clearInterval(addingComments)
        }
    })
}  