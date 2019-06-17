var express = require('express');
const qiniu = require('qiniu');
var router = express.Router();

var url = require('url')
var http = require('http')
var sizeOf = require('image-size')

router.get('/', function (req, res, next) {
    res.render('qiniu', { title: 'Qiniu' });
});

function qiniuUpload(resUrl) {
    // 上传凭证：accessKey/secretKey/qiniu_bucket/qiniu_file_hostname

    const accessKey = '.......';
    const secretKey = '.......';
    const qiniu_bucket = 'shizhi';
    const qiniu_file_hostname = 'http://omxx7cyms.bkt.clouddn.com';

    // mac鉴权 && 构建 BucketManager对象
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    var config = new qiniu.conf.Config();
    config.zone = qiniu.zone.Zone_z0;
    const bucketManager = new qiniu.rs.BucketManager(mac, config);


    getImageType(resUrl).then(res => {
        var key = timestamp() + '.' + res.type
        bucketManager.fetch(resUrl, qiniu_bucket, key, function (err, respBody, respInfo) {
            if (err) {
                console.log(err);
            } else {
                if (respInfo.statusCode == 200) {
                    console.log(`转存链接  === > ${qiniu_file_hostname}/${respBody.key}`)
                    // console.log(`${respBody.key} \r\n ${respBody.hash} \r\n ${respBody.fsize} \r\n ${respBody.mimeType}`);

                } else {
                    console.log(respInfo.statusCode);
                    console.log(respBody);
                }
            }
        });
    })
}

function getImageType(resUrl) {
    var options = url.parse(resUrl);
    return new Promise((resolve, reject) => {
        http.get(options, function (response) {
            var chunks = [];
            response.on('data', function (chunk) {
                chunks.push(chunk);
            }).on('end', function () {
                var buffer = Buffer.concat(chunks);
                let props = sizeOf(buffer)
                resolve(props)
            });
        });
    })
}

function timestamp() {
    var now = new Date;//如果date为13位不需要乘1000
    var Y = now.getFullYear();
    var M = (now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1);
    var D = (now.getDate() < 10 ? '0' + (now.getDate()) : now.getDate());
    var h = (now.getHours() < 10 ? '0' + now.getHours() : now.getHours());
    var m = (now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes());
    var s = (now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds());
    console.log('Y + M + D + h + m + s --- >', Y + M + D + h + m + s)
    return Y + M + D + h + m + s;
}

// 判断图片url是http或https
var resUrl = 'http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpel9wbmcvN1FSVHZrSzJxQzU4R3VIdGxHMk9RZnFjWUhBZjFPa3g5cVc2NlNxa3dqMER0MWVEd3lpY29lMGg4MHhZbGNzUFhlQjhKdHhLN2R1UXM4YTU4c0ppYVNPZy8wP3d4X2ZtdD1wbmc='
qiniuUpload(resUrl)

module.exports = router;