"use strict";

//module
const express = require("express");
const app = express();

const PORT = 3000;

//routing
const home = require("./src/routes/home");

//app setting 
app.set("views", "./src/views");
app.set("view engine", "ejs");

//middle ware
app.use("/", home);
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;

