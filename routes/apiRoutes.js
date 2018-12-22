const express = require('express');
const moment = require('moment');
const nodemailer = require('nodemailer');
const transporter = require('../config/mailer');

//Dependencies
const path = require('path');
let time; 


module.exports = function (app) {
    app.get("/api/time", function (req, res) {
        time = moment().format("HH");
        console.log(time);
        res.json(time);

        //res.sendFile(path.join(__dirname, "../public/views/index.html"));
    });

    app.post("/api/mail", function (req, res) {
        
            // create reusable transporter object using the default SMTP transpor
            // setup email data with unicode symbols
            let mailOptions = {
                from: `${req.body.email}`, // sender address
                to: 'placeholdertester123@yahoo.com', // list of receivers
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
        
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
        });

        //res.sendFile(path.join(__dirname, "../public/views/index.html"));
   





};