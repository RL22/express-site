var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/*Send */
router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'lewis.rodneyl@gmail.com',
			pass: '6791lamaR_'
		}
	});
	
	mailOptions = {
		from: null,
		to: 'lewis.rodneyl@gmail.com', 
		subject: 'website submission',
		text: 'You have a new message with the following details: Name:' +rec.body.name+ 'Email: ' +req.body.email+ 'Message: '+req.body.message,
		html: '<p>You have a new submission with the following details: </p><ul><li>Name: '+rec.body.name+'</li><li>Email: '+rec.body.email+' </li><li>Message: '+rec.body.message+'</li></ul>',
	};
	
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message Sent: '+info.response);
			res.redirect('/');
		}
	});
});

module.exports = router;
