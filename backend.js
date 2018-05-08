var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-request', function (req, res) {
  console.log("Received");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
