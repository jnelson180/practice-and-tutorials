var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var db;

app.use(express.static('static'))

var bugData = [
  {id: 1, priority: 'P1', status:'Open', owner:'Ravan', title:'App crashes on open'},
  {id: 2, priority: 'P2', status: 'New', owner:'Eddie', title:'Misaligned border on panel'},
];

var jsonParser = bodyParser.json();

app.use(express.static('static'))

app.get('/api/bugs', function (req, res) {
  db.collection("bugs").find().toArray(function(err, docs) {
    res.json(docs);
  });
});

app.post('/api/bugs', jsonParser, function (req, res) {
  let newBug = {
    id: bugData.length + 1,
    priority: req.body.priority,
    status: req.body.status,
    owner: req.body.owner,
    title: req.body.title
  }
  console.log('Bug report #' + newBug.id + '\n', newBug, '\n');
  newBugData = bugData.slice(0);
  newBugData.push(newBug);
  bugData = newBugData;
  res.json(newBug);
})

MongoClient.connect('mongodb://localhost/bugsdb', function(err, dbConnection) {
  db = dbConnection;
  var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log("Started server at port", port);
  });
});

/*
curl -H "Content-Type: application/json" -X POST -d '{"priority":"P2", "status":"New", "owner":"Jake", "title":"Test bug"}' http://localhost:3000/api/bugs
*/
