var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ryanjoelimba@gmail.com',
    pass: 'bayangimba123'
  }
});

var mailOptions = {
  from: 'ryanjoelimba@gmail.com',
  to: 'ryanjoel.castro@carsu.edu.ph',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});