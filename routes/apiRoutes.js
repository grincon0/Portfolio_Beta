const express = require('express');
const moment = require('moment');


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

};