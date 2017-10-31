// models/recipe.js

const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
  _id: {
    type: String,
    lowercase: true,
    required: true
  },
  title: { 
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true,
    min: 1
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: [{
      ingredient: {
        type: String,
        required: true
      },
      amount: {
        type: String,
        required: true
      },
    }],
    required: true
  },
  method: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model("Recipe", RecipeSchema);