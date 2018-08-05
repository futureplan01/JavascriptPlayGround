const express = require('express');
const bodyParser = require('body-parser');
<<<<<<< HEAD
//const email = require('./public/routes/sendEmail.js');
=======
const mongoose = require('mongoose');
const email = require('./public/routes/sendEmail.js');
const users = require('./routes/api/users');
>>>>>>> 096fe2a012ea56f08dd66f54dfe4c7a788bb0afb
const app = express();

let port = process.env.PORT || 7555;
//Body Paerser MiddleWare
app.use(bodyParser.json());
//MONGOOSE
const db = require('./keys').mongodb.dbURI;
mongoose
    .connect(db)
    .then(() => console.log('MongoDb Connected....'))
    .catch(err => console.log(err));
app.use('/api/users', users);

<<<<<<< HEAD
=======




app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/client/public'));

>>>>>>> 096fe2a012ea56f08dd66f54dfe4c7a788bb0afb
app.use(bodyParser.urlencoded({
    extended: false
}));

<<<<<<< HEAD
// Allows me to use html files
app.use(express.static(__dirname +'/react-client/public'));
=======
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/web/index.html');
})

app.get('/react', (request, resolution) => {
    resolution.sendFile(__dirname + '/client/public/index.html');
})

app.get('/logIn', (req, res) => {
    res.sendFile(__dirname + '/public/web/logIn.html');

})
app.get('/email', (req, res) => {
    res.sendFile(__dirname + '/public/web/email.html');
})

app.post('/logIn', (req, res) => {
    res.redirect('/welcome');
})
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/public/web/test.html')
})

app.get('/welcome', (req, res) => {
    res.sendFile(__dirname + '/public/web/welcome.html');
})

// Store Info In JSon File...
app.post('/email', (req, res) => {
    // retrieves information from email.html
    let eMail = req.body.email;
    email.sendMail(eMail, (err, result) => {
        if (err) {
            console.log("Main: " + err);
        }
        console.log(result);
    })
    res.redirect('/welcome');
>>>>>>> 096fe2a012ea56f08dd66f54dfe4c7a788bb0afb

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/react-client/public/index.html' )
})

<<<<<<< HEAD
app.listen(port, () =>{
	console.log('Server running on http://localhost:' + port);
})

=======
app.listen(port, () => {
    console.log('Server running on http://localhost:' + port);
})
>>>>>>> 096fe2a012ea56f08dd66f54dfe4c7a788bb0afb
