var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/:pages', function(req, res, next) {
    var Page = require('../models/').Page;
    Page.find({url_name: req.params.pages},function(err, doc){
        console.log(doc, "doc")
        res.render('pages', {doc: doc});
    });
});

module.exports = router;
