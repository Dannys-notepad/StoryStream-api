const express = require('express')
const router = express.Router()

const { viewStoryBooks, viewRandomBook, viewBookByTitle, viewBookById, viewBookByAuthor } = require('./storybookcontroller')

router.get('/', viewStoryBooks)
router.get('/random', viewRandomBook)
router.get('/title/:title', viewBookByTitle)
router.get('/id/:id', viewBookById)
router.get('/author/:author', viewBookByAuthor)


module.exports = router
