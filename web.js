var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var data = fs.readFileSync('index.html','utf-8');

var buf=new Buffer("asd");

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
