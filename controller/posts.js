const posts = [{
    user: 'user01',
    title: 'first post'
},
{
    user: 'user02',
    title: 'second post'
}]

module.exports = (socket) => {
    let i = 0;
    const addingPosts = setInterval(() => {
        if (posts[i]) {
            socket.emit('post.add', posts[i])
            socket.emit('post.count', { count: i + 1 })

            i++;
        } else {
            clearInterval(addingPosts)
        }
    })
}  