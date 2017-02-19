var express = require('express')
var app = express()

app.use(express.static('static'))

app.get('/', function (req, res) {
  res.send(index.html)
})

app.listen(3000, function() {
  console.log('Server listening on port 3000!');
})
