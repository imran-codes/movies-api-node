const express = require("express");
const path = require("path");

const app = express();

const home = app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home/index.html"));
});

module.exports = home;
