var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  req.cookies.loggedIn = false;
  res.redirect('/login');
});

module.exports = router;

