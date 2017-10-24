// routes/new.js

const router = require("express").Router();
const Recipe = require("../models/recipe");

router.get("/", (req, res) => {
  res.render("new", { title: "New recipe" });
});

router.post("/", (req, res) => {
  let recipe = new Recipe();

  recipe["ingredients"] = [];
  recipe["method"] = [];

  ["title", "author", "time", "description"].forEach((field) => {
    recipe[field] = req.body[field];
  });

  if (typeof(req.body.ingredient) === "string") {
    recipe.ingredients = [{
      "ingredient": req.body.ingredient,
      "amount": req.body.amount
    }];
  } else {
    for (var i = 0; i < req.body.ingredient.length; i++) {
      recipe.ingredients.push({
        "ingredient": req.body.ingredient[i],
        "amount": req.body.amount[i]
      });
    }
  }

  if (typeof(req.body.method) === "string") {
    recipe.method = [req.body.method];
  } else {
    recipe.method = req.body.method;
  }

  recipe.save((err) => {
    if (err) res.status(400).json({ error: err });
    res.redirect(`/recipes/${recipe._id}`)
  })
});

module.exports = router;