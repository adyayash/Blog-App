const express = require("express");
const mongoose = require("mongoose");

const app = express();
const path=require("path");
// ! connect to the mongodb database...
// ! connect to the mongodb database...
mongoose.connect("mongodb://127.0.0.1:27017/blog_tut", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connection to mongodb database was successful!");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"))
app.use(require("./routes/compose"))
app.use(require("./routes/blog"))


// server configurations are here....
app.listen(3000, () => console.log("Server started listening on port: 3000"));
