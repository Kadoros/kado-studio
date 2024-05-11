"use strict";

//module
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 3000;

//routing
const home = require("./src/routes/home");

//app setting 
app.set("views", "./src/views");
app.set("view engine", "ejs");

//middle ware
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// url을 통해서 전달되는 한글이나 공백 등과 같은 문자가 포함될 경우 인식이 잘 안되는 문제를 해결 
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home); //middleware setup method

module.exports = app;

