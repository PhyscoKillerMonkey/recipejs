// routes/new.js

const router = require("express").Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    res.render("new", { title: "New recipe" });
  });

  router.post("/", (req, res) => {
    const recipe = { "ingredients": [] };

    ["title", "author", "time", "description"].forEach((field) => {
      recipe[field] = req.body[field];
    });
    
    for (var i = 0; i < req.body["ingredient"].length; i++) {
      recipe["ingredients"].push({
        "ingredient": req.body["ingredient"][i],
        "amount": req.body["amount"][i]
      });
    }

    db.createRecipe(recipe, (err, result) => {
      console.log(err, result.ops[0]);
      if (!err) {
        res.redirect(`/recipes/${result.ops[0]._id}`);
      }
    });
  });

  return router;

}