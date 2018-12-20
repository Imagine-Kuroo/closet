var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/**
 * METHOD HTTP请求方法
 * PATH 服务器上的路径
 * HANDLER 是在路由匹配时执行的函数
 * var app = express();
 * app.METHOD(PATH, HANDLER);
 */
