var express = require('express');
var bodyParser = require('body-parser')
var cors = require("cors");

var restAPIRouter = require("./routes/restAPI");

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors());

app.use("/restAPI", restAPIRouter);

module.exports = app;
