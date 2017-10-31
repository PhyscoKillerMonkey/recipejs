// routes/recipes.js

const router = require("express").Router();
const Recipe = require("../models/recipe");

router.get("/", (req, res) => {
  Recipe.find((err, docs) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.render("allRecipes", { title: "All Recipes", recipes: docs });
    }
  });
});

router.get("/:id", (req, res) => {
  Recipe.findById(req.params.id, (err, docs) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.render("singleRecipe", { title: docs.title, recipe: docs });
    }
  });
});

router.delete("/:id", (req, res) => {
  console.log(`Delete recipe with ID: ${req.params.id}`);

  Recipe.findByIdAndRemove(req.params.id, (err, docs) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;