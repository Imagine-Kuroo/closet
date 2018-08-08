var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var URL = require('url');

router.get('/sendmail', function (req, res, next) {
  var query = URL.parse(req.url, true).query;
  var mailObj = {
    email: query.email,
    nickname: query.nickname,
    title: query.title,
    link: query.link,
  }

  var response = {
    errno: '',
    data: mailObj,
    message: '',
  }

  const params = {
    host: 'smtp.163.com',
    post: 465,
    secure: true,
    auth: {
      user: 'maggiegu94@163.com',
      pass: '123qwe'
    }
  };

  const mailOptions = {
    from: 'maggiegu94@163.com ', // sender address
    to: mailObj.email, // list of receivers
    subject: '您订阅的钬花方案包已经送到啦~', // Subject line
    text: '请小主查收！', // plaintext body
    html: '使用钬花APP，收获更多精彩~', // html body
    attachments: [{
      filename: mailObj.title,
      path: mailObj.link,
    }]
  };

  var transporter = nodemailer.createTransport(params);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('*******>', error);
      response.errno = 99989;
      response.message = '发送邮件失败！';
      res.send(JSON.stringify(response));
    } else {
      console.log('Message sent: ' + info.response);
      response.errno = 0;
      response.message = '发送邮件成功！';
      res.send(JSON.stringify(response));
    }
  });

});

module.exports = router;
