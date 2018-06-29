const express = require('express'); 
const bodyParser = require('body-parser');
const email = require('./routes/sendEmail.js');
const app = express();

let port = process.env.PORT || 7555;

app.use(express.static('public'));
    
app.use(bodyParser.urlencoded({
	extended: false
}));

// uses static files
app.use(express.static('views'));


app.get('/', (req,res) =>{
	res.redirect('/email'); 
})

app.get('/logIn', (req,res) =>{
	res.sendFile(__dirname + '/views/logIn.html')
})
app.get('/email', (req,res) =>{
	res.sendFile(__dirname+'/views/email.html');
})

app.post('logIn', (req,res) =>{
	res.redirect('/welcome');
})

app.get('/welcome', (req,res) =>{
	res.sendFile(__dirname+'/views/welcome.html');
})

// Store Info In JSon File...
app.post('/email',(req,res) =>{
	let eMail = req.body.email;
	email.sendMail(eMail,(err,result)=>{
		if(err){
			console.log("Main: " + err);
		}
		console.log(result);
	})
	res.redirect('/welcome');

})

app.listen(port, () =>{
	console.log('Server running on http://localhost:' + port);
})