var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('1 ---  > ', req.cookies)
  next()
}, function (req, res, next) {
  console.log('2 ---  > ', req.cookies)
  res.render('index', { title: 'demooooo', user: 'Haha' });
});

module.exports = router;
