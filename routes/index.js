const router = require("express").Router();
const Blog = require("../models/Blog");

router.get("/", async (req, res) => {
  /*const allBlogs = await Blog.find();
  res.render("index", { blogs: allBlogs });*/
  try {
    const allBlogs = await Blog.find();
    res.render("index", { blogs: allBlogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    // Handle the error appropriately (e.g., send an error response to the client).
  }
});

module.exports = router;
