/**
 * Users can save favorite recipes while recipes house ingredients and their properties
 */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {type: String, required: true},
  favorites: [{type: String}] //Recipe ID from spoonacular gets added here (ref'd by front end eventually to retrieve said recipes)
});

module.exports = mongoose.model("User", userSchema);