var express = require('express')
var serveIndex = require('serve-index')

var app = express()

app.use('/ftp',express.static('public/ftp'),serveIndex('public/ftp',{'icons':true}))

app.listen(3000)