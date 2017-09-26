// app.js

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const db = require("./config/db");

const app = express();
const port = 8080;

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Connect to the database server
MongoClient.connect(db.url, (err, database) => {
  if (err) {
    console.error("Database connection failed: " + err);
    return;
  }

  // Create the database controller
  const dcController = require("./dbController.js")(database);

  // Define routes
  app.use("/", require("./routes/index"));
  app.use("/recipes", require("./routes/recipes")(dcController));
  app.use("/new", require("./routes/new")(dcController));
  app.use("/api", require("./routes/api")(dcController));

  // Database connected, start the server now
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});