const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const api = require("./api/index.js");

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

app.listen(2333, () => {
    console.log("MockAPI Server Run On：http://localhost:2333");
});
