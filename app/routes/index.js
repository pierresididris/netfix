var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.user){
    res.redirect('/users/login');
  }
  console.log(req.user);
  res.render('index', {user: req.user});
});

module.exports = router;
 