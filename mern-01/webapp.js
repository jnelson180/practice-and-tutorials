var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(express.static('static'))

var bugData = [
  {id: 1, priority: 'P1', status:'Open', owner:'Ravan', title:'App crashes on open'},
  {id: 2, priority: 'P2', status: 'New', owner:'Eddie', title:'Misaligned border on panel'},
];

var jsonParser = bodyParser.json({ "type": "application/json" });

app.use(express.static('static'))

app.get('/api/bugs', function (req, res) {
  res.status(200).send(JSON.stringify(bugData));
})

app.post('/api/bugs', jsonParser, function (req, res) {
  console.log('Received new bug: ');
  let newBug = {
    id: bugData.length + 1,
    priority: req.body.priority,
    status: req.body.status,
    owner: req.body.owner,
    title: req.body.title
  }
  newBugData = bugData.slice(0);
  newBugData.push(newBug);
  bugData = newBugData;
  console.log(bugData);
  res.json(newBug);
})

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Server listening on port " + port + "!");
})


/*
curl -H "Content-Type: application/json" -X POST -d '{"priority":"P2", "status":"New", "owner":"Jake", "title":"Test bug"}' http://localhost:3000/api/bugs
*/
