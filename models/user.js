/**
 * Users can save favorite recipes while recipes house ingredients and their properties
 */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  favorites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}],
  password: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema);