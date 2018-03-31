
var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
var fs = require('fs');
app.set('view engine', 'hbs');
var cpp;
var jstxt;
fs.readFile("./txt/cpp/cpp.txt", 'utf8', function(err, data){
  if (err) throw err;

  cpp = data.toString();
//  console.log(cpp);
});

fs.readFile("./txt/js/js.txt", 'utf8', function(err, data){
  if (err) throw err;
  jstxt = data.toString();
//  console.log(jstxt);
});

// viewed at http://localhost:8080
app.use(express.static('public'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.get('/', function(req, res) {
  //  res.sendFile(path.join(__dirname + '/index.html'));
res.render('index', {
  title : "Hello world",
  cpp_rogram : "C++ Program",
  js_program : "Javascript Program",
  cpptxt: cpp,
  jstxt : jstxt,
  name : "Develop  by Phillip Salazar"
})

});

app.listen(8000, function() {
  console.log("port 8000!!!");
});
