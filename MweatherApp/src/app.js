const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = 8000;

const staticPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));
app.set("views", viewPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404err");
});

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
