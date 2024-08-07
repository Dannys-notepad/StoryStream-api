const express = require('express')
const router = express.Router()

const { viewStoryBooks } = require('./storybookcontroller')
//const { checkApiKey } = require('../middlewares/middlewares')

router.get('/', viewStoryBooks)

module.exports = router
