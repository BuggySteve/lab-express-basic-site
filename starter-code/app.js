const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname + "/public")));

hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/photo-gallery", (req, res) => {
  res.render("photogallery");
});

app.get("/ajax", (req, res) => {
  res.render("ajax");
});

app.listen(3000, () => {
  console.log("Get and thou shalt receive");
});
