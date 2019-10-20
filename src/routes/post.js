var express = require('express');
var router = express.Router();

/* GET post page. */
router.get('/(all)?', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
