const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

var componentsController = require('./controllers/componentController.js')



router.get('/design-system/components/vertical-nav', componentsController.vertical_nav);


module.exports = router
