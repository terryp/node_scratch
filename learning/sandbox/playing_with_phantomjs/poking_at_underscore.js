/*jslint node: true */

'use strict';

var _ = require('underscore');
var webPage = require('webpage');

var viewports = {
    'desktop' : {'width': 1024, 'height': 768},
    'tablet' : {'width': 768, 'height': 946},
    'phone' : {'width': 320, 'height': 480},
};

var url = 'http://qa.get-started.devry.edu/non-brand';

function shoot(file, w, h) {
    var page = webPage.create();
    page.viewportSize = {
        width: w,
        height: h
    };
    page.open(url);
    page.onLoadFinished = function() {
        page.render(file);
        phantom.exit();
    };
}

_.each(viewports, function(view) {
    var file = view.width + 'x' + view.height + '.png';
    shoot(file, view.width, view.height);
});
