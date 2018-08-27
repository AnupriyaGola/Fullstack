'use strict';

const nodemailer = require('nodemailer');


let sendEmail = (sendEmailOptions) => {

    let account = {
        user: '****', //emailid
        pass: '****'  //password
    }

    let transporter = nodemailer.createTransport({
         service: 'Gmail', 
        //host: 'smtp.gmail.com;',
        port: 465,
        secure: true,
        auth: {
            user: account.user, 
            pass: account.pass 
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"ChatApp 👻" anupriya.gola@gmail.com', // sender address
        to: sendEmailOptions.email, // list of receivers
        subject: sendEmailOptions.subject, // Subject line
        text: `Dear ${sendEmailOptions.name},
               Welcome to the ChatApp, a platform for everyone to be in touch with each other.
        `, // plain text body
        html: sendEmailOptions.html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        else{
            console.log('Message successfully sent.', info);
        }
       
    });

}

module.exports = {
    sendEmail: sendEmail
  }
