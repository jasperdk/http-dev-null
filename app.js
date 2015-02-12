var express = require('express')
var app = express()

app.get('/*', function (req, res) {
    res.send(204);
})

app.post('/*', function (req, res) {
    res.send(200);
})

app.put('/*', function (req, res) {
    res.send(200);
})

app.delete('/*', function (req, res) {
    res.send(200);
})

var server = app.listen(9000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('dev null listening at http://%s:%s', host, port)

})