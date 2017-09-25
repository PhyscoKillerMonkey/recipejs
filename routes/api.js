// routes/api.js

const router = require("express").Router();

module.exports = (db) => {

  router.get("/recipes", (req, res) => {
    console.log("Return all recipes");
  });

  router.get("/recipe/:id", (req, res) => {
    console.log(`Return recipe with ID: ${req.params.id}`);
  });

  router.post("/recipe/:id", (req, res) => {
    console.log(`Create recipe with ID: ${req.params.id}`);
  });

  router.put("/recipe/:id", (req, res) => {
    console.log(`Update recipe with ID: ${req.params.id}`);
  });

  router.delete("/recipe/:id:", (req, res) => {
    console.log(`Delete recipe with ID: ${req.params.id}`);
  });

  return router;
  
}