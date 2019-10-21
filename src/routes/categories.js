var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/category-controller');

// Get all Genres
router.get('/', categoryController.renderAll);

// Get that one Genre everyone's talking about
router.get('/:id', categoryController.renderCategory);

module.exports = router;
