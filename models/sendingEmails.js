require('dotenv').config();

const nodemailer = require("nodemailer");


class SendEmails{
    constructor(message){
        this.message = message;
    }

    sendContactMail(){
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: process.env.GMAIL_USER, // generated ethereal user
            pass: process.env.GMAIL_PASS // generated ethereal password
            },
            tls:{
            rejectUnauthorized:false
            }
        });

        let mailOptions = {
            from: '"Site da CPE" <cpe.mail.test@gmail.com>', // sender address
            to: "arthurlapertosa2@gmail.com", // list of receivers
            subject: "Novo contato", // Subject line
            text: "CPE", // plain text body
            html: this.message // html body
          };

        return new Promise((resolve) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    resolve(error);
                }
                else {
                    console.log(`Email enviado ${info.response}`);
                    console.log('Message sent: %s', info.messageId);
                    resolve(1);
                }
                });
          });
    }
}

module.exports = SendEmails;