var express = require('express');
var router = express.Router();

/* GET post page. */
router.get('/', function(req, res, next) {
  res.render('posts', { title: 'Express' });
});

router.get('/new', function(req, res, next){
  res.render('posts-new');
})

module.exports = router;
