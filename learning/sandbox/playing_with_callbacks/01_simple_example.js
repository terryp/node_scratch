
var done = function(msg) {
    console.log(msg);
}

var something = setTimeout(function(done) { 
    done();
}, 4000)

something();

console.log('hi!');
