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

// Design system
// Components
router.get('/design-system/components/', componentsController.index);
router.get('/design-system/components/notifications', componentsController.notifications);
router.get('/design-system/components/beta-banner', componentsController.beta);
router.get('/design-system/components/currency', componentsController.currency);
router.get('/design-system/components/expander', componentsController.expander);
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

// Accessibility
router.get('/accessibility/', accessibilityController.index_get);
router.get('/accessibility/content/:id', accessibilityController.content_get);

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
router.get('/content/a-z', contentController.az_get);
router.get('/content/audience', contentController.audience_get);
router.get('/content/controlled-language', contentController.controlled_language_get);
router.get('/content/emails-and-text-messages', contentController.emails_and_texts_get);
router.get('/content/key-styles', contentController.key_styles_get);
router.get('/content/tools', contentController.tools_get);

module.exports = router
