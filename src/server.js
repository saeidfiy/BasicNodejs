var http = require('http');
var fs = require('fs');
var date = require('../module/mydatetime')
var log = require("../log/log")

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const today = date.myDateTime()
  var ip = req.connection.remoteAddress
  console.log(ip)
  log.file("info","Client ip => "+ip)
  const home = fs.readFileSync('pages/home.html')
  res.write(home)
  res.write(today);
  res.end();
}).listen(8080,()=>{console.log("server run on port localhost:8080")}); 