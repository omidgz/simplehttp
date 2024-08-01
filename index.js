var http = require('http');
var randomWord = require('./randomWord');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(randomWord.randomWord());
}).listen(8080);