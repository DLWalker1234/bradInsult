const http = require('http');
const express = require('express');
const ClientCapability = require('twilio').jwt.ClientCapability;

const app = express();


let request = require('request');



// app.get('/token', (req, res) => {
//   // put your Twilio API credentials here
//   const accountSid = 'ACb56556fa0753e9db8c09f0ef873b8f7e';
//   const authToken = '5215b334f21ea62cfffef0ae21311838';

//   // put your Twilio Application Sid here
//   const appSid = 'APXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

//   const capability = new ClientCapability({
//     accountSid: accountSid,
//     authToken: authToken,
//   });
//   capability.addScope(
//     new ClientCapability.OutgoingClientScope({ applicationSid: appSid })
//   );
//   capability.addScope(new ClientCapability.IncomingClientScope('joey'));
//   const token = capability.toJwt();

//   res.set('Content-Type', 'application/jwt');
//   res.send(token);
// });

// app.post('/voice', (req, res) => {
//   // TODO: Create TwiML response
// });

// SMS STUFF
// Twilio Credentials
const accountSid = 'ACb56556fa0753e9db8c09f0ef873b8f7e';
const authToken = '5215b334f21ea62cfffef0ae21311838';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

let SMS = new promise(
  function(resolve, reject) {
    request('https://insult.mattbas.org/api/en/insult.txt?who=Brad', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        let insult = body;
     }
});


  }
)

client.messages
  .create({
    to: '******',
    from: '******',
    body: insult,
  })
  .then(message => console.log(message.sid));


// http.createServer(app).listen(1337, '127.0.0.1');
// console.log('Twilio Client app server running at http://127.0.0.1:1337/token/');


