# twilio-api-whatsapp

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Afterwards, install the dependencies by running `npm install`:

```bash
cd 

# If you use npm
npm install

# Yarn
yarn
```

## Development

### Environment Variables

Before run, set the .env file with the keys below:
```bash
TWILIO_ACCOUNT_SID=xxx
TWILIO_AUTH_TOKEN=xxx
WA_NUMBER_FROM="whatsapp:+<number>"
WA_NUMBER_TO="whatsapp:+<number>"
```

### Running

In order to develop locally, you can start the servers by running:

```bash
npm run dev

or 

yarn dev
```

This will automatically start up the Sender Server and the WebHook Server.

### NGROK
We now need to start ngrok, telling it which port(server.js process) we want to expose to the public Internet

```bash
./ngrok http 3000
```

### Update Twilio Sandbox Configuration
Access https://www.twilio.com/console/sms/whatsapp/sandbox 
and set the 'WHEN A MESSAGE COMES IN' with the value: https://<your_domain>.ngrok.io/sms
as a 'HTTP POST' request.


## Some Final Tips
* Your Twilio WhatsApp Sandbox should be configured
* Your WhatsApp number should be registered in the Twilio list
** Send "join <your sandbox keyword>" to your sandbox number 


## Additional Documentation
* https://www.twilio.com/docs/sms/quickstart/node
* https://www.twilio.com/docs/whatsapp/quickstart/node?code-sample=code-send-a-message-with-whatsapp-and-nodejs&code-language=Node.js&code-sdk-version=3.x


