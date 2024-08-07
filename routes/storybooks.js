const express = require('express')
const router = express.Router()

const { viewStoryBooks } = require('./storybookcontroller')

router.get('/', viewStoryBooks)

module.exports = router
