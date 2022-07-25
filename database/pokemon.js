const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: String,
  id: Number,
  weight: Number,
  height: Number,
  types: Array
})

module.exports = mongoose.model('Pokemon', pokemonSchema)
