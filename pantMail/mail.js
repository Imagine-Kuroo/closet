
var nodemailer = require('nodemailer');

const params = {
    host: 'smtp.163.com',
    post: 465,
    secure: true,
    auth: {
        user: 'abc@163.com',
        pass: 'pwd'
    }
};

const mailOptions = {
    from: 'abc@163.com ', // sender address
    to: 'qwe@qq.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>', // html body
    attachments:[{
        filename:'1111',
        path:'http://omxx7cyms.bkt.clouddn.com/channel.zip',
    }]
};

var transporter = nodemailer.createTransport(params);

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log('--->', error);
    } else {
        console.log('Message sent: ' + info.response);
    }
});
