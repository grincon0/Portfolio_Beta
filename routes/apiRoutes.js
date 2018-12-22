const express = require('express');
const moment = require('moment');
const nodemailer = require('nodemailer');
const sender = require('../config/mailer');

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
            sender(req);

        
            // create reusable transporter object using the default SMTP transpor
            // setup email data with unicode symbols
 
        });

        //res.sendFile(path.join(__dirname, "../public/views/index.html"));
   





};