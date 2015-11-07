var moment = require('moment');
var nodemailer = require('nodemailer');


module.exports.send = function (req, res) {
	console.log("Message recieved!");
	console.log("Message: " + req.body.message);
	console.log("Name: " + req.body.name);
	console.log("Email: " + req.body.email);

	// var transporter = nodemailer.createTransport();
	// transporter.sendMail({
	//     from: 'ahsite0@gmail.com',
	//     to: 'unxmnd@gmail.com',
	//     subject: 'this is a test mail',
	//     text: 'hello world!'
	// }, function (err, info) {
	// 	if (err) return console.error(err);
	// 	console.log("Email sent successfully?");
	// });

	if (!req.body.message) return console.error("Blank message! No email sent");

	// create reusable transporter object using SMTP transport
	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	        user: 'ahsite0@gmail.com',
	        pass: 'longpassword011'
	    }
	});

	// NB! No need to recreate the transporter object. You can use
	// the same transporter object for all e-mails

	// setup e-mail data with unicode symbols
	var bodyText = "From: " + req.body.name + " <" + req.body.email + ">" + "\n\n" + "Message: " + req.body.message;
	
	var mailOptions = {
	    from: 'ahsite0@gmail.com',
	    to: 'unxmnd@gmail.com',
	    subject: 'New message from the dashboard site!',
	    text: bodyText
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);

	});



};


