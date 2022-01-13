const express = require("express");

require ("dotenv").config();

const app = express();

app.get ('/',function (req, res){
    res.send('hola laura');});

app.listen(process.env.PORT);

//localhost:3001