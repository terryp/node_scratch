
function makeRequest(url, timeout, callback) {
    timeout = (typeof timeout !== "undefined") ? timeout : 2000;
    timeout = (typeof callback !== "undefined") ? callback : function() {} ;

    // This is leveraging the ternary operator
}
