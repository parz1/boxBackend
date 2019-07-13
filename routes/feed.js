var express = require("express");
var router = express.Router();
var db = require("../utils").db;
var feedTool = require("../utils").feedTool;

/* GET home page. */
router.get("/", function(req, res, next) {
  db.query("SELECT * FROM feeds", {}, r => {
    res.json({ state: "success", data: r });
  });
});

// 创建feed项
router.post("/create", function(req, res, next) {
  let body = req.body;
  console.log(body);
  let func = "create" + body.type;
  if(body.type)
  feedTool[body.type][func](body);
  res.json({ state: "successs" });
});

module.exports = router;
