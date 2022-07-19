const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Responds to get request');
})

app.listen(3000, () => {
  console.log('Now listening to port 3000.....');
})