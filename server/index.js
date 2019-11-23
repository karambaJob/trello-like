const express = require('express');
const api = require('./api');
const cors = require('cors');
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/trello", { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connection successful');
});

const app = express();

app.use(express.json()); 
app.use('/api', cors(), api);

app.listen(3000);