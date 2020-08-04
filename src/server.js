var http = require('http');
var date = require('../module/mydatetime')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  const today = date.myDateTime()
  var ip = req.connection.remoteAddress
  console.log(ip)
  res.write(today);
  res.end();
}).listen(8080,()=>{console.log("server run on port localhost:8080")}); 