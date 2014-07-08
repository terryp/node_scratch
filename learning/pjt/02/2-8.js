
'use strict';

if (num.constructor == String) {
    num = parseInt(num);
}

if (str.constructor == Array) {
    str = str.join(',');
}
