var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var Page = require('../models/').Page;
  Page.find(function(err, docs){

    res.render('index', {docs: docs});
  });
});

router.post('/', function(req,res, next){
  var Page = require('../models/').Page;
  var tags = req.body.tag_search;
  console.log(tags);
  var tagArr = tags.split(" ");
  //console.log(tagArr);
  Page.find({
    'tags': { $in: ['awesome']}
  }, function(err, docs){
    //console.log(docs, "doccccc");
    res.render('index', {docs: docs});
  });
});



module.exports = router;

