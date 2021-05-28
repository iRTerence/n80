var express = require('express');
var router = express.Router();
const pagesCtrl = require('../controllers/pages');

/* GET users listing. */
router.get('/', pagesCtrl.menuPage);

module.exports = router;
