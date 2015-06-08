var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addpage');
});

router.post('/', function(req,res, next){
  var models = require('../models/');
  console.log(req.body, "reqbody")
  var title = req.body.title;
  var content = req.body.body;
  var tags = req.body.tags;
  var tagArr = tags.split(" ");

  if(!title && content){
    title = content.split(" ").splice(0,2).join(" ");
    var url_name = new Date();
    console.log(typeof title,title, "typeof")
  }else {
    var url_name = req.body.title.replace(/\s+/, "_");
  }
  //
  //// STUDENT ASSIGNMENT:
  // add definitions of the `title`, `content` and `url_name` variables here

  var page = new models.Page({ 'title': title, 'body': content, 'tags': tagArr, 'url_name': url_name });
  page.save();
  res.redirect('/');
})

module.exports = router;


