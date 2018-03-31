const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const reader = require('./modules/reader');
app.set('view engine', 'hbs');
var marked = require('marked');
var a;
app.use(express.static('views'));
// prepare server
//app.use('/api', api); // redirect API calls
app.use(express.static(__dirname + '/public')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/js', express.static(__dirname + '/node_modules/marked/lib'));
//app.use('/js', express.static(__dirname + '/public/js'));
//app.use('/css', express.static(__dirname + '/css'));


reader.cake('/intro.txt', function(err, data){
if(err) return console.log(err);
//console.log(data);
a = data;
return a
});


//Routing system.
app.get('/', function (req, res) {
  // res.sendFile(path.join(__dirname + '/index.html'));
/*
  fs.readFile("files/intro.txt", "utf8", function (error, data) {
      //  console.log(data);
        a = data;
        return a;
      });
*/
res.render('index', {
  title : "Make-n-Taste!",
  intro: a })
});

// link one
app.get('/chap1', function(req, res){
 fs.readFile("files/chap1.txt", "utf8", function (error, data) {
      //  console.log(data);
        a = data;
        return a;
      });

  res.render('index', {title: a});

});

app.get('/chap2', function(req, res){

});


//run the server.
app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
});
reader.cake('/intro.txt', function(err, data){
if(err) return console.log(err);
//console.log(data);
});
