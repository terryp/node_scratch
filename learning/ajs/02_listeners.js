/*jslint node: true */

'use strict';

var finder = {
    run: function(records) {
        var self = this;
        setTimeout(function () {
            records.push(3, 4);
            self.trigger('done', [records]);
        }, 1000);
    }
}

var processor = {
    run: function(records) {
        var self = this;
        setTimeout(function () {
            records.push(5, 6);
            self.trigger('done', [records]);
        }, 1000);
    }
}
