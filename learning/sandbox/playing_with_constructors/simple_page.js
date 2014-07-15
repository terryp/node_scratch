
'use strict';

var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');

function Page(type, body) {
    
    var type = type;
    this.links = this.parsedHtml.find('a');
    this.type = getType()
    this.body = body;
    this.parsedHtml = getParseStrategy(); 
    this.title = this.parsedHtml('title').text();
    this.metaDescription = this.parsedHtml(
        'meta[name=description]').attr('content'
    );
    this.metaAuthor = this.parsedHtml('meta[name=author]').attr('content');
    this.metaKeywords = this.parsedHtml(
        'meta[name=keywords]').attr('content'
    );
    this.form = this.parsedHtml('form').attr('name');

    function getParseStrategy() {
        if (type == 'static') {
            return cheerio.load(fs.readFileSync(body).toString());
        } else if (type == 'dynamic') {
            return cheerio.load(body);
        }
    }

    function getType() {
        return type;
    }
}

Page.prototype.getSummary = function() {
    var summary = {
        'title': this.title,
        'metaDescription': this.metaDescription,
        'metaAuthor': this.metaAuthor,
        'metaKeywords': this.metaKeywords,
    };
    return summary;
}

// Here's a static page. This will be helpful when testing from straight disk. 

var staticSrc = './index.html';
var testStaticPage = new Page('static', staticSrc);

console.log(testStaticPage.type);
console.log(testStaticPage.getSummary());
console.log(testStaticPage.links);

// However, cheerio is a little finicky on how it gets it's responses. So in 
// the case of a dyanmic page - read one that is coming from the node 'request'
// library we need to do something a little different

var dynamicUrl = 'http://www.yahoo.com';
var options = {
    headers: {
        'User-Agent': 'request 0.26.0'
    }
}

request(dynamicUrl, options, function(err, res, body) {
    if (err) throw err;
    var testDynamicPage = new Page('dynamic', body)
    console.log(testDynamicPage.type);
    console.log(testDynamicPage.getSummary());
});
