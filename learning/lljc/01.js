
function numberGenerator() {
    // Here's a local/free variable the ends up 
    // in the closure. 
    var num = 1;
    
    function checkNumber() {
        console.log(num);
    }

    num++;

    return checkNumber;
}

var number = numberGenerator();
number();
