// routes/recipes.js

const router = require("express").Router();
const Recipe = require("../models/recipe");

router.get("/", (req, res) => {
  Recipe.find((err, docs) => {
    if (err) res.status(400).json({ error: err });
    res.render("allRecipes", { title: "All Recipes", recipes: docs });
  });
});

router.get("/:id", (req, res) => {
  Recipe.findById(req.params.id, (err, docs) => {
    if (err) res.status(400).json({ error: err });
    res.render("singleRecipe", { title: docs.title, recipe: docs });
  });
});

module.exports = router;