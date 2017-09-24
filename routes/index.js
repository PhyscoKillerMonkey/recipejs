// routes/index.js

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { title: "RecipeJS" });
});

module.exports = router;