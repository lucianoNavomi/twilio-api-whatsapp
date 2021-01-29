var express = require('express');
var app = express();

const PORT = 3005

app.get('/', function (req, res) {
  res.send('Welcome to Twilio API WhatsApp by Luciano Buhler!');
});

app.listen(PORT, function () {
  console.log(`Twilio API WhatsApp app listening on port ${PORT}!`);
});