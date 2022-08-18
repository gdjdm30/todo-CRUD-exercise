//Handles GET request for homePage
//Handles POST method for adding new task

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

//Add specific routes for specific tasks
router.get('/', homeController.getIndex)
router.post('/', homeController.createTask)

module.exports = router