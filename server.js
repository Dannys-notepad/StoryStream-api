require('dotenv').config()

const express = require('express')
const app = express()
const cookieParser = require("cookie-parser")
const sessions = require('express-session')
const PORT = process.env.PORT

const { index,
  signup,
  login,
  allUsers,
  deleteuser,
  allBooks,
  addBook,
  updateBook,
  deleteBook
} = require('./controllers/controllers')

const { checkApiKey } = require('./middlewares/middlewares')
const storybooks = require('./routes/storybooks')

app.set('view engine', 'ejs')


/***************** Middlewares *****************/
app.use(sessions({
  secret: 'thisismykey',
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  reSave: false
}))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//app.use(express.xml())

/**************** Access routes *****************/
app.get('/', index)

app.post('/signup', signup)

app.post('/login', login)


/************ Super User routes ****************/
app.get('/superuser/:apikey/users', allUsers)

app.delete('/superuser/:apikey/users/delete/:id', deleteuser)

app.get('/superuser/:apikey/storybooks', allBooks)

app.post('/superuser/:apikey/storybooks/add', addBook)

app.patch('/superuser/:apikey/storybooks/update', updateBook)

app.delete('/superuser/:apikey/storybooks/delete/:id', deleteBook)

/***************** API router ****************/
app.use('/api/:apikey/storybooks', checkApiKey, storybooks)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
