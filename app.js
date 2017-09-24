// app.js

const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Middleware setup
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.use("/", require("./routes/index"));

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});