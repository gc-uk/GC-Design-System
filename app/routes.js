const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

var servicesController = require('./controllers/servicesController.js')
var hubServicesController = require('./controllers/hubServicesController.js')
var informationServicesController = require('./controllers/informationServicesController.js')
var transactionalServicesController = require('./controllers/transactionalServicesController.js')
var webServicesController = require('./controllers/webServicesController.js')
var componentsController = require('./controllers/componentController.js')
var patternsController = require('./controllers/patternsController.js')
var stylesController = require('./controllers/stylesController.js')
var contentController = require('./controllers/contentController.js')

var accessibilityController = require('./controllers/accessibilityController.js')
var userResearchController = require('./controllers/userResearchController.js')

// Design system
// Components
router.get('/design-system/components/', componentsController.index);
router.get('/design-system/components/notifications', componentsController.notifications);
router.get('/design-system/components/beta-banner', componentsController.beta);
router.get('/design-system/components/currency', componentsController.currency);
router.get('/design-system/components/expander', componentsController.expander);
router.get('/design-system/components/feedback-banner', componentsController.feedback);
router.get('/design-system/components/footer', componentsController.footer);
router.get('/design-system/components/header', componentsController.header);
router.get('/design-system/components/hero', componentsController.hero);
router.get('/design-system/components/interruption-card', componentsController.interruption);
router.get('/design-system/components/promo-cards', componentsController.promo);
router.get('/design-system/components/search', componentsController.search);
router.get('/design-system/components/tags', componentsController.tags);
router.get('/design-system/components/vertical-nav', componentsController.vertical_nav);


// Patterns

// Styles
router.get('/design-system/styles/typography', stylesController.typography);
router.get('/design-system/styles/page', stylesController.page);

// Accessibility
router.get('/accessibility/', accessibilityController.index_get);
router.get('/accessibility/content/:id', accessibilityController.content_get);

// User Research
router.get('/user-research/', userResearchController.index_get);
router.get('/user-research/content/:id', userResearchController.content_get);

// Services
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

// Content 
router.get('/content/', contentController.index_get);
router.get('/content/content/:id', contentController.content_get);

module.exports = router
