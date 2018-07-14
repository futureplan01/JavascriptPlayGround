const express = require('express'); 
const bodyParser = require('body-parser');
//const email = require('./public/routes/sendEmail.js');
const app = express();

let port = process.env.PORT || 7555;

app.use(bodyParser.urlencoded({
	extended: false
}));

// Allows me to use html files
app.use(express.static(__dirname +'/react-client/public'));

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/react-client/public/index.html' )
})

app.listen(port, () =>{
	console.log('Server running on http://localhost:' + port);
})

