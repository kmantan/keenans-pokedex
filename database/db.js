const mongoose = require('mongoose')
const Pokemon = require('./pokemon')
mongoose.connect("mongodb://localhost/pokemonDb", () => {
  console.log('Connected to Pokemon DB');
})

module.exports.savePokemon = function savePokemon(returnedPokemon) {

  const pokemon = new Pokemon(returnedPokemon)
      pokemon.save().then(() => {
    })
};

module.exports.lookForPokemon = function lookForPokemon(name) {

 return Pokemon.find({'name': name})
  .then((result) => {
    return result;
  })
}