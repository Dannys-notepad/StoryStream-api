const { validationResult } = require('express-validator')

const { dbStatus, user, superUser } = require('../models/models')
const { generateUniqueId, generateApiKey } = require('../utils')

//@des documentation page
//@route domain/
//@method GET
const index = (req, res) => {
  dbStatus(req, res)
}

//@des signup page
//@route /signup
//@method GET
const renderSignup = (req, res) => {
  res.render('signup')
}

//@des Signup
//@route /signup
//@method POST
const signup = (req, res) => {
  
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array(),
      requirements: `Username min length 3, max length 20 - Password min length 8 and max length 20`,
      reasonForError: `You're seeing this error because your username or password doesn't meet the requirements`})
  }
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

//@des login page
//@route /login
//@method GET
const renderLogin = (req, res) => {
  res.render('login')
}

//@des Signup
//@route /login
//@method POST
const login = (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }
  let { email, password } = req.body
  let hashedPass = btoa(password)
  let userSchema = {
    email,
    password: hashedPass
  }
  const User = new user(userSchema, req, res)
  User.login()
}

/********** Super user route functions *********/

//@des See all users
//@route /superuser/{apikey}/users
//@method Get
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

//@des Delete a user
//@route /superuser/{apikey}/users/delete/{userid}
//@method Delete
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

//@des See all Storybook
//@route /superuser/{apikey}/storybooks
//@method Get
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

//@des Add a Storybook
//@route /superuser/{apikey}/storybooks/add
//@method POST
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

//@des Update a Storybook
//@route /superuser/{apikey}/storybooks/update
//@method Patch
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

//@des Delete a Storybook
//@route /superuser/{apikey}/storybooks/delete/{bookid}
//@method Delete
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
  renderSignup,
  renderLogin,
  signup,
  login,
  allUsers,
  deleteuser,
  allBooks,
  addBook,
  updateBook,
  deleteBook
}
