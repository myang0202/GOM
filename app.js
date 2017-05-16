const express = require ('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require ('mongoose');

const app = express();
//Any users can have access

const users = require('./routes/users');
app.use(cors());

//Body parser Middlewhere


const port = 5300;

//Index Route
app.use(bodyParser.json());

app.use('/users', users);


app.get('/', (req, res) => {
  res.send('trying to figure out what I have to do');
});
//Start Server
app.listen(port, () => {
  console.log('server started on port' +port);
});
