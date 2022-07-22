const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const pokeDb = require('../database/db')
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(bodyParser())

app.post('/', (req, res) => {

  let pokemonName = req.body.name;

  pokeDb.lookForPokemon(pokemonName)
  .then((resultFromDb) => {
    if(resultFromDb.length === 0) {
      axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
      .then((response) => {
        pokeDb.savePokemon(response.data);
        res.json(response.data);
      })
      .catch((err) => {
        console.log('Error: ', err);
      })
    } else {
      res.json(resultFromDb[0])
    }
  })
  // res.json({hello: 'hello'})




});

app.get('/', (req,res) => {
  console.log('req.body');
})

app.listen(3000, () => {
  console.log('Now listening to port 3000.....');
});