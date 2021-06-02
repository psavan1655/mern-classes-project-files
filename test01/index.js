const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is up and running ${PORT}`);
});
