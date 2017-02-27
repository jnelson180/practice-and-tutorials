var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var db;

app.use(express.static('static'))

var jsonParser = bodyParser.json();

app.use(express.static('static'))

app.get('/api/bugs', function(req, res) {
  db
    .collection("bugs")
    .find( req.query )
    .toArray(function(err, docs) {
      res.json(docs);
    });
});

app.post('/api/bugs', jsonParser, function(req, res) {
  var newBug = req.body;

  db
    .collection("bugs")
    .insertOne(newBug, function(err, result) {
      var newId = result.insertedId;
      db
        .collection("bugs")
        .find({_id: newId})
        .next(function(err, doc) {
          console.log("Received new bug report \n" + JSON.stringify(doc));
          res.json(doc);
        });
    });
});

MongoClient.connect('mongodb://localhost/bugsdb', function(err, dbConnection) {
  db = dbConnection;
  var server = app.listen(3000, function() {
    var port = server
      .address()
      .port;
    console.log("Started server at port", port);
  });
});

/*
curl -H "Content-Type: application/json" -X POST -d '{"priority":"P2", "status":"New", "owner":"Jake", "title":"Test bug"}' http://localhost:3000/api/bugs
*/
