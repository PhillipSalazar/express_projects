var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.use(express.static('public'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000, function() {
  console.log("port 8000!!!");
});
