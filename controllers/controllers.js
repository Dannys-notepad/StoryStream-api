const bcryptjs = require('bcryptjs')

const { user, superUser } = require('../models/models')
const { generateUniqueId, generateApiKey } = require('../utils')


const index = (req, res) => {
  res.render('index')
}

const signup = (req, res) => {
  let { username, email, password } = req.body
  let hashedPass = btoa(password)
  let userSchema = {
    uniqueId: generateUniqueId(),
    username,
    email,
    password: hashedPass,
    apiKey: generateApiKey()
  }
  const User = new user(userSchema, req, res)
  User.signup()

}

const login = (req, res) => {
  let { email, password } = req.body
  let hashedPass = btoa(password)
  let userSchema = {
    email,
    password: hashedPass
  }
  const User = new user(userSchema, req, res)
  User.login()
}

const allUsers = (req, res) => {
  let apikey = req.params.apikey
  let userSchema = {
    apikey
  }
  const SuperUser = new superUser(userSchema, req, res)
  let confirmUser = SuperUser.confirmSuperUser()
  if(confirmUser){
    SuperUser.viewAllUsers()
  }else{
    res.status(401).json({message: 'Your unathorized to view to route'})
  }
}

const getSession = (req, res) => {
  let userSchema = {
    username: 'User'
  }
  const User = new user(userSchema, req, res)
  User.checkSession()
}

const deleteuser = (req, res) => {
  let data = {
    id: req.params.id,
    apikey: req.params.apikey
  }
  const SuperUser = new superUser(data, req, res)
  let confirmAccess = SuperUser.confirmSuperUser()
  if(confirmAccess){
    SuperUser.deleteUser()
  }else{
    res.status(401).json({message: 'You\'er unauthorized to visit this route'})
  }
}

const allBooks = (req, res) => {
  let data = {
    apikey: req.params.apikey
  }
  const SuperUser = new superUser(data, req, res)
  let confirmAccess = SuperUser.confirmSuperUser()
  if(confirmAccess){
    SuperUser.viewStoryBooks()
  }else{
    res.status(401).json({message: `You'er unauthorized to view this route`})
  }
}

const addBook = (req, res) => {
  let apikey = req.params.apikey
  let { bookTitle, bookBody, bookAuthor } = req.body
  let data = {
    apikey,
    id: generateUniqueId(),
    title: bookTitle,
    body: bookBody,
    author: bookAuthor
  }
  const SuperUser = new superUser(data, req, res)
  let confirmAccess = SuperUser.confirmSuperUser()
  if(confirmAccess){
    SuperUser.addStoryBook()
  }else{
    res.status(401).json({message: `You'er unauthorized to visit this route`})
  }
}

const updateBook = (req, res) => {
  let { body, id } = req.body
  let apikey = req.params.apikey

  let data = {
    id,
    body,
    apikey
  }

  const SuperUser = new superUser(data, req, res)
  let confirmAccess = SuperUser.confirmSuperUser()
  if(confirmAccess){
    SuperUser.updateStoryBook()
  }else{
    res.status(401).json({message: `You are unauthorized this view this route`})
  }
}

const deleteBook = (req, res) => {
  let data = {
    id: req.params.id,
    apikey: req.params.apikey
  }
  const SuperUser = new superUser(data, req, res)
  let confirmAccess = SuperUser.confirmSuperUser()
  if(confirmAccess){
    SuperUser.deleteStoryBook()
  }else{
    res.status(401).json({message: 'You\'er unauthorized to visit this route'})
  }
}

module.exports = {
  index,
  signup,
  login,
  allUsers,
  getSession,
  deleteuser,
  allBooks,
  addBook,
  updateBook,
  deleteBook
}
