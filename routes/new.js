// routes/new.js

const router = require("express").Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    res.render("new", { title: "New recipe" });
  });

  router.post("/", (req, res) => {
    const recipe = {};
    ["title", "author", "time", "description"].forEach((field) => {
      recipe[field] = req.body[field];
    });

    db.createRecipe(recipe, (err, result) => {
      console.log(err, result.ops[0]);
      if (!err) {
        res.redirect(`/recipes/${result.ops[0]._id}`);
      }
    });
  });

  return router;

}