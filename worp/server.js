// importing all of the dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');


//app use body parser and static assets
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// mongoose promise function
mongoose.Promise = Promise;

// mongodb connection ur from mLabs
var dbUrl = 'mongodb://phillipsalazar:Glasses12@ds251598.mlab.com:51598/learning-node'

//
var Message = mongoose.model('Message', {
  name: String,
  message: String
})

// js ovject of messages
var messages = [
  {name: '', message: ''},
  {name: '', message: ''}
]

// api, Get request from the url. That from the frontend that uses the user data
app.get('/messages', (req, res) => {
  Message.find({}, (err,messages) => {
    res.send(messages);
  })

});

// api, Append the data from the database to the frontend
app.post('/messages', (req, res) => {
//  console.log(req.body)
  var message = new Message(req.body);


// Other things That I don't feel like documenting
// Logic of the api, basic geting data from the datbase and filtering badwords
// not really a filter lol
  message.save()
  .then(() => {
    console.log('Saved!')
    Message.findOne({message: 'badword'});
    /*
      Message.findOne({message: 'badword'}, (err, censored) => {
        if(censored){
          console.log('Censored word found!', censored);
          Message.remove({_id: censored.id}, (err) => {
            console.log('removed censored message')
          })
        }
      });
      io.emit('message', req.body);
      messages.push(req.body);
      res.sendStatus(200);
      */
  }).then(  censored => {
    if(censored){
    //  console.log('removed censored message')
      console.log('Censored word found!', censored)
      return  Message.remove({_id: censored.id})
    }
    io.emit('message', req.body);
    messages.push(req.body);
    res.sendStatus(200);
  })
  .catch((err) => {
    res.sendStatus(500);
    return console.error(err);
  })


});

// connection to to the user from socket.io library
io.on('connection', (socket) => {
 console.log('a user is connected')
});

// connection the the database
mongoose.connect(dbUrl, {userMongoClient: true }, (err) => {
  console.log('mongodb connection', err);
});

// starting the server. 
var server = http.listen(3000, () => {
  console.log('server is listening on port', server.address().port);
});
