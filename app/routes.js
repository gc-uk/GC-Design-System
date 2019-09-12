const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

var componentsController = require('./controllers/componentController.js')
var patternsController = require('./controllers/patternsController.js')
var stylesController = require('./controllers/stylesController.js')
var servicesController = require('./controllers/servicesController.js')
var hubServicesController = require('./controllers/hubServicesController.js')
var informationServicesController = require('./controllers/informationServicesController.js')
var transactionalServicesController = require('./controllers/transactionalServicesController.js')
var webServicesController = require('./controllers/webServicesController.js')


router.get('/design-system/components/vertical-nav', componentsController.vertical_nav);

// Design system

router.get('/services/', servicesController.services_catalogue_get);

// Hub services
router.get('/hub_services/', hubServicesController.hub_services_get);
router.get('/hub_services/detail_page/:id', hubServicesController.hub_services_detail_page_get);

// Information services
router.get('/information_services/', informationServicesController.information_services_get);
router.get('/information_services/detail_page/:id', informationServicesController.information_services_detail_page_get);

// Transactional services
router.get('/transactional_services/', transactionalServicesController.transactional_services_get);
router.get('/transactional_services/detail_page/:id', transactionalServicesController.transactional_services_detail_page_get);

// Web services
router.get('/web_services/', webServicesController.web_services_get);
router.get('/web_services/detail_page/:id', webServicesController.web_services_detail_page_get);


module.exports = router
