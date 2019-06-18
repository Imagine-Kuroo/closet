var express = require('express');
var router = express.Router();

var qUpload = require('../public/javascripts/qiniuUpload')

// var resUrl = 'http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpel9wbmcvN1FSVHZrSzJxQzU4R3VIdGxHMk9RZnFjWUhBZjFPa3g5cVc2NlNxa3dqMER0MWVEd3lpY29lMGg4MHhZbGNzUFhlQjhKdHhLN2R1UXM4YTU4c0ppYVNPZy8wP3d4X2ZtdD1wbmc='
// qUpload.init(resUrl)

router.post('/', function (req, res, next) {
    res.send('qiniu post');
});

module.exports = router;