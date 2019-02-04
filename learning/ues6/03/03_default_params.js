
function makeRequest(url, timeout = 2000, callback = function() {}) {
    console.log(url);
    console.log(timeout);
    callback();
}

makeRequest("/foo");

makeRequest("/foo", 500);

makeRequest("/foo", 500, function(){
    console.log("Aloha!");
});
