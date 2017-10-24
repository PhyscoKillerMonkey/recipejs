// models/recipe.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = Schema({
  title: String,
  author: String,
  time: Number,
  description: String,
  ingredients: [{
    ingredient: String,
    amount: String
  }],
  method: [String]
});

module.exports = mongoose.model("Recipe", RecipeSchema);