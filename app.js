"use strict";

//module
const express = require("express");
const app = express();

const PORT = 3000;

//routing
const home = require("./routes/home");

//app setting 
app.set("views", "./views");
app.set("view engine", "ejs");


app.use("/", home);

app.listen(PORT, function () {
    console.log("server installed");
});


