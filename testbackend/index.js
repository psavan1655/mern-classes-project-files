const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Working backend");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to contact U");
});

app.get("/aboutus", (req, res) => {
  res.send("Welcome to about us");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

// npm init
// npm i express
// make index.js
