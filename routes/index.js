var express = require("express");
var router = express.Router();
var db = require("../utils").db;

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/create", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
