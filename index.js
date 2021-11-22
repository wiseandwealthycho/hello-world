var express = require('express');
var app = express();

app.get('/', function(req,res) {
  res.send('Hello Beautiful World!');
});



var port = 3001;
app.listen(port, function(){
  console.log('Server On! http://localhost:'+port);
});
