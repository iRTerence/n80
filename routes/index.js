var express = require('express');
var router = express.Router();
const pagesCtrl = require('../controllers/pages');


/* GET home page. */
router.get('/', pagesCtrl.landingPage);

module.exports = router;
