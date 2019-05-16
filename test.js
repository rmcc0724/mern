const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-Parser');
const app = express();

app.use(bodyParser.json);

const db = require('./config/keys');

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(()=> console.log("DB connected"))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started"));