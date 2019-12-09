const express = require('express');
const bodyParser = require('body-parser')
const cors = require("cors");
const morgan = require("morgan");

const proposalRouter = require("./routes/proposal");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/api/proposal", proposalRouter);

module.exports = app;
