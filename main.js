const express = require('express'); 
const bodyParser = require('body-parser');
const email = require('./routes/sendemail.js');
const app = express();

let port = process.env.PORT || 7555;

app.use(express.static('public'));
    
app.use(bodyParser.urlencoded({
	extended: false
}));

// uses static files
app.use(express.static('views'));

// send this to /email ... somehow ...
//app.get('/', (req,res) =>{

//})

app.get('/', (req,res) =>{
	res.redirect('/email');
})

app.get('/email', (req,res) =>{
	res.sendFile(__dirname+'/views/email.html')
})

app.post('/email',(req,res) =>{
	let eMailying = req.body.eMail;
	email.sendMail(eMail,(err,result)=>{
		if(err){
			console.log("Main: " + err);
		}
		console.log(result);
	})
	res.sendFile(__dirname + '/views/email.html');

})

app.listen(port, () =>{
	console.log('Server running on http://localhost:' + port);
})