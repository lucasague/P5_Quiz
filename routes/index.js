var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
  res.render('index');
});

// Credits page
router.get('/credits', (req, res, next) => {
	res.render('credits');
});

module.exports = router;
