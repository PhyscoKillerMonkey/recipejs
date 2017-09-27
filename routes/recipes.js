// routes/recipes.js

const router = require("express").Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    db.getAllRecipes((err, docs) => {
      if (err) res.status(400);
      res.render("allRecipes", { title: "All Recipes", recipes: docs });
    });
  });

  router.get("/:id", (req, res) => {
    db.getRecipe(req.params.id, (err, docs) => {
      if (err) res.status(400);
      res.render("singleRecipe", { title: docs.title, recipe: docs });
    });
  });

  return router;

}