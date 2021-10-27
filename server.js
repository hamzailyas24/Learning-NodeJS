const express = require("express");
const app = express();
const port = 4000;

app.use((req, res, next) => {
  console.log("request");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("This is home page");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

app.get("/contact", (req, res) => {
  res.send("This is Contact Page");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
