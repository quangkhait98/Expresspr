var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="readname" method="post" >');
      res.write('<input type="text" name="namea"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
  
});

app.post('/readname', function (req, res) {
  var name = req.body.namea;
  res.send('<h1>Xin chào '+ name+'</h1>');
});

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Ung dung Node.js dang hoat dong tai dia chi: http://%s:%s", host, port);
});