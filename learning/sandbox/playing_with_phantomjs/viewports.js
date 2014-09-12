/*jslint node: true */

'use strict';

var _ = require('underscore');


var viewports = {
    'desktop' : {'width': 1024, 'height': 768},
    'tablet' : {'width': 768, 'height': 946},
    'phone' : {'width': 320, 'height': 480},
};

function sizeAndShoot(w, h) {
    var url = 'http://qa.get-started.devry.edu/non-brand';
    var webPage = require('webpage');
    var page = webPage.create();
    page.viewportSize = {
        width: w,
        height: h
    };
    var file = w + 'x' + h + '.png';
    page.open(url, function() {
        setTimeout(function() {
            page.render(file);
            phantom.exit(); 
        }, 5000);
    });
}

_.each(viewports, function)

for (var v in viewports) {
    // console.log(viewports[v].width, viewports[v].height);
    sizeAndShoot(viewports[v].width, viewports[v].height);
}


