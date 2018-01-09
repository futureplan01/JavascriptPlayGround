
const express = require('express');
const bodyParser = require('body-parser');

const email = require ('./email_vertification.js')
const database = require('./database') // database..
const app = express();

var port = process.env.PORT || 7555;
// Gotta run through my code to make it more effecient. 


app.use(express.static('public'));
// what the heck does this do??
app.use(bodyParser.urlencoded({
	extended: false
}));


/*
	1) Handle errors
*/

app.post('/createUser',(req,res)=>{
	// Call back required..
	if(req.body.name.length >= 20){
		console.log("Name is way too big, please try again...");
		res.redirect("/signup.html")
	}else{
	  if(req.body.password !== req.body.first_password){
		console.log("password does not match, please try again..");
		res.redirect("/signup.html")
	  }else{
        database.createUser(req.body.name,req.body.email,password)
		    .then(result => {
	   		console.log("Success");
	   		res.redirect("/welcome.html")
		},error =>{
		     console.log(error);
	   		 console.log("Email is already registered please try again...");
	   		 res.redirect("/signup.html");
		})
	   }
	}
});


app.post('/login', (req,res) =>{

	database.checkUser(req.body.email,req.body.password)
	.then(result => {
		res.redirect("/welcome.html")
	},error => {
		console.log(error.code); 
		console.log("Wrong Username/password combination");
		res.sendStatus(401);
	})
})


app.listen(port, () => {
	console.log('Server running on http://localhost:' + port);
})
