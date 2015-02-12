var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

morgan.token('content', function getContent(req) {
    if(!req.body)
        return "unable to parse request content as JSON";
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :content'))

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