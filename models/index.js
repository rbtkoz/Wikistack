var mongoose = require('mongoose');
// Notice the `mongodb` protocol; Mongo is basically a kind of server,
// which handles database requests and sends responses. It's async!
mongoose.connect('mongodb://localhost/wikistack');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));


var pageSchema = new mongoose.Schema({
    title:    String,
    url_name: String,
    owner_id: String,
    body:     String,
    tags:     [String],
    date:     { type: Date, default: Date.now },
    status:   Number
});

pageSchema.virtual('full_url').get(function () {
    return "wiki/"+ this.url_name;
});

var userSchema = new mongoose.Schema({
    name:  { first: String, last: String },
    email: String
});

//Page.find({
//    // $in matches a set of possibilities
//    tags: {$in: ['someTag', 'someOtherTag']}
//});

var Page = mongoose.model('Page', pageSchema);
var User = mongoose.model('User', userSchema);




module.exports = {
    Page: Page,
    User: User
};


































