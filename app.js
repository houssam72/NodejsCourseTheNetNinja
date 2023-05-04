const express = require("express");
const morgan = require("morgan");

// express app
const app = express();

// listen for requests
app.listen(3000);

// middleware & static files
app.use(express.static('public')) 
// that mean if i create a folder over here called public then anything inside that 
// folder is going to be made available as a satic file to the frontEnd

app.use(morgan("dev"));

// register view engine
app.set("view engine", "ejs");
// app.set('views', 'myviews');

app.use((req, res, next) => {
  console.log("new request made:");
  console.log("host: ", req.hostname);
  console.log("Path: ", req.path);
  console.log("method: ", req.method);
  next();
});

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.use((req, res, next) => {
  console.log("In the next middleware");
  next();
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
