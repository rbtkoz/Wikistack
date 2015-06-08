
var marked = require('marked');

module.exports = function(swig) {

    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
    });


    var markedown = function(doc){
        return marked(doc)

    }

    markedown.safe = true;
    swig.setFilter('markedown', markedown)
    //console.log(marked('I am using __markdown__.'));

}