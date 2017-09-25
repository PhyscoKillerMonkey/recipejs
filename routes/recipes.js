// routes/recipes.js

const router = require("express").Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    res.render("index", { title: "List of all recipes" });
  });

  router.get("/:id", (req, res) => {
    res.render("index", { title: `Single recipe page for: ${req.params.id}` });
  });

  return router;

}