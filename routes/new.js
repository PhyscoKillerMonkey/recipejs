// routes/new.js

const router = require("express").Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    res.render("index", { title: "New recipe page" });
  });

  router.post("/", (req, res) => {
    console.log("Create recipe form has been sent, proxy and redirect to full recipe page");
  });

  return router;

}