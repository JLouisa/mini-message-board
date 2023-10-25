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
  console.log(req.url);
});

/* GET message page. */
router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.msg,
    user: req.body.name,
    added: new Date(),
  });
  console.log("data received");
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
