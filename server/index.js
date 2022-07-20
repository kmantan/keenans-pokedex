const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({extended: true}));

app.post('/', (req, res) => {
  let requestedPokemon = req.body.name.toLowerCase();
  axios.get('https://pokeapi.co/api/v2/pokemon/' + requestedPokemon)
  .then((data) => {
    console.log('Returned Data: ', data);
  })
  .catch((err) => {
    console.log('Error: ', err);
  })
});

app.listen(3000, () => {
  console.log('Now listening to port 3000.....');
});