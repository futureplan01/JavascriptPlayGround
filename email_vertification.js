
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const config = require("./config.js");

let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		type: "OAuth2",
		user: config.gmail.user,
		clientId: config.gmail.clientID,
		clientSecret: config.gmail.clientSecret,
		refreshToken: config.gmail.resfreshToken,
		accessToken: config.gmail.accessToken
	}});

let text = "bro you're awesome";
// Create a simple JSON object with the necessary values 
// for sending the email

let mailOptions = {
	from: "JesaiahPrayor@gmail.com",
	to: "jesaiahprayor@gmail.com",
	subject: "Checking..",
	text: text
}

transporter.sendMail(mailOptions, (err, info) =>{
	if(err){
		console.log(err);
	}else{
		console.log("Message sent " + info.response);
	}
})


