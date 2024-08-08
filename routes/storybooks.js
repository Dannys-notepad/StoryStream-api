const express = require('express')
const router = express.Router()

const { viewStoryBooks, viewBookByTitle, viewBookById, viewBookByAuthor } = require('./storybookcontroller')

router.get('/', viewStoryBooks)
router.get('/title/:title', viewBookByTitle)
router.get('/id/:id', viewBookById)
router.get('/author/:author', viewBookByAuthor)


module.exports = router
