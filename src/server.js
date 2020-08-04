var http = require('http');
var date = require('../module/mydatetime')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  const today = date.myDateTime()
  res.end(today);
}).listen(8080,()=>{console.log("server run on port localhost:8080")}); 