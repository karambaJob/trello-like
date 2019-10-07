const express = require('express');
const api = require('./api');
const cors = require('cors');

const app = express();

app.use(express.json()); 
app.use('/api', cors(), api);

app.listen(3000);