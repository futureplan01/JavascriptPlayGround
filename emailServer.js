const express = require('express'); // what is express.... 
const bodyParser = require('body-parser');
const app = express();

let port = process.env.PORT || 7555;

app.use(express.static('public'));

// Confused

//app.use(bodyParser.urlencoded({
//	extended: false
//}));

// uses static files
app.use(express.static('views'));


app.get('/', (req,res) =>{
	res.redirect('/email.html');
})

app.listen(port, () =>{
	console.log('Server running on http://localhost:' +port);
})