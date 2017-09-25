// routes/recipes.js

const router = require("express").Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    res.render("index", { title: "List of all recipes" });
  });

  router.get("/:id", (req, res) => {
    res.render("index", { title: "Single recipe page" });
  });

  router.get("/new", (req, res) => {
    res.render("index", { title: "New recipe page" });
  });

  router.post("/new", (req, res) => {
    console.log("Create recipe form has been sent, proxy and redirect to full recipe page");
  });

  return router;

}