var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../utils").db;
const multer = require("multer");

var upload = multer({ dest: "uploads/" });

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/uploadimg", upload.single("avator"), function(req, res, next) {
  let file = req.file;
  console.log(file);
  res.json({ state: "success", imgUrl: file.filename });
});

router.get("/loadimg", function(req,res,next) {
  let imgurl = req.query.imgurl;
  let file = path.join(__dirname, '../uploads/'+imgurl);
  res.download(file);
})

module.exports = router;
