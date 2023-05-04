const express = require("express");
const path = require("path");

// express app
const app = express();

// Listen for requests
app.listen(3000);

path.join(__dirname, "views", "index.js");

app.get("/", (req, res) => {
  // res.end('<p>Home page</p>')
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  // res.end('<p>About page</p>')
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
app.use((req,res)=>{
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})