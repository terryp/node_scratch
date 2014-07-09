
'use strict';

function User(properties) {
    for (var i in properties) { function() {
        this['get' + i] = function() {
            return properties[i];
        }

        this['set' + i] = function(val) {
            properties[i] = val;
        }
        }
    }
}
