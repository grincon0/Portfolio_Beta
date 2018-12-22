const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const key = require('./key');



function sender(req){
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail',
      /*   port: 587,
        secure: false, // true for 465, false for other ports */
        
        auth: {
                type: 'OAuth2',
                user: key.info.email, // generated ethereal user
                clientId: key.info.id,
                clientSecret: key.info.secret,
                refreshToken: key.info.token,
            
        },
    /*     tls:{
            rejectUnauthorized : false
        } */
    });

    let mailOptions = {
        from: `${req.body.email}`, // sender address
        to: key.info.rec, // list of receivers
        subject: `${req.body.subject}`, // Subject line
        text: `${req.body.message}`, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }


        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.sendStatus(200);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

}


module.exports = sender;