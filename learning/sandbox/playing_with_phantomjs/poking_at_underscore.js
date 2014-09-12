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

_.each(viewports, function(view) {
    var page = webPage.create();
    page.viewportSize = { 
        width: view.width, 
        height: view.height 
    };
    page.open(url, function(status) { 
        if (status !== 'success') {
            console.log('Error getting page');
        } else {
            
        }
        page.render(view.width + 'x' + view.height + '.png');
        phantom.exit();
    });
});
