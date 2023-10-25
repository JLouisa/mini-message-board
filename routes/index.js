const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

/* GET message page. */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Form" });
});

/* GET message page. */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Form" });
});

module.exports = router;
