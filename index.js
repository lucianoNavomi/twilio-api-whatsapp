var express = require('express');
var app = express();

const PORT = 3005

app.get('/', function (req, res) {
  res.send('Welcome to Twilio API WhatsApp by Luciano Buhler!');
});

app.get('/sendMessage', function (req, res) {
  require('dotenv').config()
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  const waFrom = process.env.WA_NUMBER_FROM;
  const waTo = process.env.WA_NUMBER_TO;

  client.messages
    .create({
      from: waFrom,
      body: 'Hello there!',
      to: waTo
    })
    .then(message => {
      console.log(message.sid)
      res.status(200).send('Message sent Succesfully!! Message ID: ', message.sid);
    })
    .catch(err => {
      console.error(err)
      res.status(400).send('Message sent Failure!!');
    });
});

app.listen(PORT, function () {
  console.log(`Twilio API WhatsApp app listening on port ${PORT}!`);
});