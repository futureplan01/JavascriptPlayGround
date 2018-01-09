// My practice file

const express = require('express');
const bodyParser = require('body-parser');
const session = require('client-sessions');

const database = require('./database') // database..
const app = express();

var bcrypt = require('bcrypt');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use((req,res,next) =>{
	if(req.session && req.session.user){
		database.checkUser(req.session.user, "Session Check")
		.then(result =>{
			req.user = result;
		})

	}
})

// configure session
app.use(session({
	cookieName: 'session',   
	secret: 'focus on today',
	duration: 30 * 60 * 1000, // 30 minutes
	activeDuration: 5 * 60 * 1000
}))
// Welcome page... 
app.get('/welcome',(req, res) =>{
	if(req.session && req.session.user){
		console.log(req.session);
		console.log(req.session.user);
		database.checkUser(req.session.user, "Session Check")
		.then(result =>{
			console.log(result);
			res.locals.user = result; // Not quite sure what this does.
			res.redirect('/welcome.html');
		}), error =>{
			req.session.reset();
			res.redirect('/index.html');
		}
	}else{
		res.redirect('/index.html');
	}
})

app.listen(7556, () => {
	console.log('Server running on http://localhost:7556');
})

// Shouldn't be access till you log in to


app.post('/login', (req,res) =>{

	database.checkUser(req.body.email,req.body.password)
	.then(result => {
		console.log(result);
		req.session.user = result; // Not working... 
		res.redirect("/welcome.html")
	},error => {
		console.log(error.code); 
		console.log("Wrong Username/password combination");
		res.sendStatus(401);
	})
})
