const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const messagesSocket = require('./controllers/messages')
io.of('/messages').on('connection', messagesSocket.bind(this, io))



mongoose.connect(require('./config/keys').mongodb.url)
const db = mongoose.connection


db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log("we're connected to mongo")
})


app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const routes = require('./routes/index')
app.use('/users', routes)

app.use(function (req, res, next) {
  const err = new Error('File Not Found')
  err.status = 404
  next(err)
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.send(err.message)
})


http.listen(8080, () => {
	console.log("Server is running on http://localhost:8080")
})


