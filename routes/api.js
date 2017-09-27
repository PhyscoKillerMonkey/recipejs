// routes/api.js

const router = require("express").Router();

module.exports = (db) => {

  router.get("/recipes", (req, res) => {
    console.log("Get all recipes");

    db.getAllRecipes((err, docs) => {
      if (err) {
        // TODO: Maybe return a relavent error code here?
        res.json({ error: "Could not get recipes" });
      } else {
        res.json(docs);
      }
    });
  });

  router.get("/recipe/:id", (req, res) => {
    console.log(`Get recipe with ID: ${req.params.id}`);

    db.getRecipe(req.params.id, (err, docs) => {
      if (err) {
        res.json({ error: "Could not get the recipe" });
      } else {
        res.json(docs);
      }
    });
  });

  router.post("/recipe", (req, res) => {
    console.log(`Create recipe`);

    const recipe = {};

    ["title", "author", "time", "description"].forEach((field) => {
      recipe[field] = req.body[field];
    });

    console.log(recipe);

    db.createRecipe(recipe, (err, result) => {
      if (err) {
        res.json({ error: "Could not create the recipe" });
      } else {
        res.json(result.ops[0]);
      }
    });
  });

  router.put("/recipe/:id", (req, res) => {
    console.log(`Update recipe with ID: ${req.params.id}`);

    // TODO: Not sure how to implement this one right now, needs to be partial somehow...

    res.status(501).json({ error: "Not yet implemented" });
  });

  router.delete("/recipe/:id", (req, res) => {
    console.log(`Delete recipe with ID: ${req.params.id}`);

    db.deleteRecipe(req.params.id, (err, result) => {
      if (err) {
        res.json({ error: "Could not delete the recipe" });
      } else {
        res.json({ message: "Recipe " + req.params.id + " deleted!" });
      }
    });
  });

  return router;
  
}