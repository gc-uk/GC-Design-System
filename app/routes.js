const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

var componentsController = require('./controllers/componentController.js')
var coreController = require('./controllers/coreController.js')
var hubServicesController = require('./controllers/hubServicesController.js')
var informationServicesController = require('./controllers/informationServicesController.js')
var transactionalServicesController = require('./controllers/transactionalServicesController.js')
var webServicesController = require('./controllers/webServicesController.js')


router.get('/design-system/components/vertical-nav', componentsController.vertical_nav);

// Design system

router.get('/services/', coreController.services_catalogue_get);

// Hub services
router.get('/services/hub_services/', hubServicesController.hub_services_get);
router.get('/services/hub_services/detail_page/:id', hubServicesController.hub_services_detail_page_get);

// Information services
router.get('/services/information_services/', informationServicesController.information_services_get);
router.get('/services/information_services/detail_page/:id', informationServicesController.information_services_detail_page_get);

// Transactional services
router.get('/services/transactional_services/', transactionalServicesController.transactional_services_get);
router.get('/services/transactional_services/detail_page/:id', transactionalServicesController.transactional_services_detail_page_get);

// Web services
router.get('/services/web_services/', webServicesController.web_services_get);
router.get('/services/web_services/detail_page/:id', webServicesController.web_services_detail_page_get);


module.exports = router
