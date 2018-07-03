const nodemailer = require('nodemailer');
require('dotenv').config();


// 3-Legged OAuth2 
let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		type: 'OAuth2',
		clientId: process.env.clientId,
		clientSecret: process.env.clientSecret
	}
});

module.exports = {
	
	sendMail: function (email, callback){
		transporter.sendMail({
			from: 'prayorjesaiah@gmail.com',
			to: email,
			subject: 'testing',
			text: 'You Rock',
			auth: {
				user: 'prayorjesaiah@gmail.com',
				refreshToken: process.env.refreshToken,
				accessToken: process.env.accessToken
			}
		});

	}
}



