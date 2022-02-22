const mongoose = require('mongoose');

//Only exists to mitigate pings to spoonacular API
const recipeSchema = new mongoose.Schema({
  ingredients: [{type: String, required: true}],
  calories: {type: Number, required: true}
});

module.exports = mongoose.model('Recipe', recipeSchema);