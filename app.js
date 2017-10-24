// app.js

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConfig = require("./config/db");

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
mongoose.connect(dbConfig.url, { useMongoClient: true });

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {

  // Define routes
  app.use("/", require("./routes/index"));
  app.use("/recipes", require("./routes/recipes"));
  app.use("/new", require("./routes/new"));
  //app.use("/api", require("./routes/api"));

  // Database connected, start the server now
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});