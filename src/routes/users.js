var express = require('express');
var router = express.Router();
var userController = require('../controllers/user-controller');

/* GET users listing. */
router.get('/(|\/all)', userController.renderAll);

/* GET new Author form */
router.get('/new', userController.renderUserForm);

/* POST add new Author */
router.post('/new', userController.addAuthor);

module.exports = router;
