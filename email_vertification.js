
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
		accessToken: config.gmail.accessToken,
		expires: 
	}});

let text = "You Just Got an email from the coolest person ever";
// Create a simple JSON object with the necessary values 
// for sending the email

let mailOptions = {
	from: "JesaiahPrayor@gmail.com",
	to: "jesaiahprayor@gmail.com",
	subject: "Checking..",
	text: text
}
module.exports = {
 send(userEmail, callback){
	let mailOptions = {
	from: "JesaiahPrayor@gmail.com",
	to: userEmail,
	subject: "Guess What...",
	text: text
	}

	transporter.sendMail(mailOptions, (err, info) =>{
		if(err){
			console.log(err);
		}else{
			console.log("Message sent " + info.response);
		}
	})
	callback (null, 'email sent to ' + userEmail);
}

}


