var express = require('express');
var router = express.Router();
const postController = require('../controllers/post-controller');

/* GET post page. */
// router.get('/', function(req, res, next) {
//   res.render('posts', { title: 'Express' });
// });

/* GET post page. */
// Uncomment once renderall is created
router.get('/', postController.renderAll)

// GET new Post
router.get('/new', postController.renderPostForm);

// POST new Blog Post
router.post('/new', postController.addPost);

// GET single Post
router.get('/:id', postController.renderPost);

module.exports = router;
