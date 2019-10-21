var express = require('express');
var router = express.Router();
const postController = require('../controllers/post-controller');

/* GET post page. */
router.get('/', function(req, res, next) {
  res.render('posts', { title: 'Express' });
});

/* GET post page. */
// Uncomment once renderall is created
// router.get('/', postController.renderAll)

router.get('/new', postController.renderPostForm);

module.exports = router;
