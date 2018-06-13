const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.email,
		pass:process.env.pass,
	}
});

module.exports = {
	
	sendMail: function (email, callback){
		const mailOptions = {
			from: 'prayorjesaiah@gmail.com',
			to: email,
			subject: 'test',
			text:'easy going'
		};
		transporter.sendMail(mailOptions,function(error,info){
			if(error){
				callback(error);
			}
			else{
				callback(null,info);
			}
		});
	}
}



