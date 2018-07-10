const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const email = require('./public/routes/sendEmail.js');
const users = require('./routes/api/users');
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





app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/client/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

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

})

app.listen(port, () => {
    console.log('Server running on http://localhost:' + port);
})