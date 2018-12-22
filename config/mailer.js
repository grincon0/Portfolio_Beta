const nodemailer = require('nodemailer');
const key = require('./key');

const transporter = nodemailer.createTransport({
    host: 'smtp.yahoo.email', 
    service: 'yahoo',
    port: 587,
    secure: false, // true for 465, false for other ports
    
    auth: {
        user: key.email, // generated ethereal user
        pass: key.pass // generated ethereal password
    },
/*     tls:{
        rejectUnauthorized : false
    } */
});


module.exports = transporter;