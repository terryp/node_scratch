
'use strict';

var obj = new Object();

obj.val = 5;

obj.click = function() {
    console.log('You pressed click!');
};

var sameObjectDifferentStyle = {
    val: 5,
    click: function() {
        console.log('You pressed click!');
    },
}

obj.click();
sameObjectDifferentStyle.click();
