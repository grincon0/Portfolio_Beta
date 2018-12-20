const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

/* const router = require('./routes/htmlRoutes'); */
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));


//app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//app.use('/', router);

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

app.listen(PORT, function (){
    console.log(`App listening on PORT:${PORT}`);

});