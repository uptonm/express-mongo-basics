const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useCreateIndex: true}, (err) => {
  if (err) throw err;
  console.log('Connected to MongoDB Database')
});

require('./models/postModel');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});