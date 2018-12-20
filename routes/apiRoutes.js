const express = require('express');
const moment = require('moment');


//Dependencies
const path = require('path');



module.exports = function (app) {
    app.get("/api/time", function (req, res) {
        let time = moment().format("HH");
        res.json(time);

        //res.sendFile(path.join(__dirname, "../public/views/index.html"));
    });

};