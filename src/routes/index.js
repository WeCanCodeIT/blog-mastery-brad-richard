var express = require('express');
var router = express.Router();
const postController = require('../controllers/post-controller');
const indexController = require('../controllers/index-controller');

/* GET home page. */
router.get('/', indexController.renderMain);

module.exports = router;
