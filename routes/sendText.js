// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACf21f2f78634f0c6951f59a53046621df';
const authToken = '49eda177c476aa9ddf1c4e1a24a74dd5';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12014821692',
     to: '+15169674481'
   })
  .then(message => console.log(message.sid))
  .done();