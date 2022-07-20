const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({extended: true}));

app.post('/', (req, res) => {
  console.log(req.body)
});

app.listen(3000, () => {
  console.log('Now listening to port 3000.....');
});