const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
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
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname +'/react-client/public'));

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/react-client/public/index.html' )
})

app.listen(port, () =>{
	console.log('Server running on http://localhost:' + port);
})

