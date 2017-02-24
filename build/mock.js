var express = require('express')
var path = require('path')
var config = require('../config')
var app = express()
var port = config.dev.mockServerPort || 8081;
app.use(function (req, res) {
    var url = req.url;
    var urlPath = req.path;
    console.log('proxy ' + port + ' host mock data path => ' + __dirname, '../', urlPath);
    res.sendFile(path.join(__dirname, '../', urlPath));
});
module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
})
