const express = require('express');
const controller = require('../controllers/mainController');


const router = express.Router();

//GET index page

router.get('/', controller.index);

//create about us
router.get('/about', controller.aboutUs);
//create contact us
router.get('/contact', controller.contactUs);


module.exports = router;