'use strict';

function getValue(condition) {
    if (condition) {
        let value = 'blue';
        console.log(`In the IF - ${value}`);
    } else {
        // This will error out since value isn't in scope.
        // let limits scope tp the block
        // 
        // console.log(`In the ELSE - ${value}`);
        return null
    }
    // This will error out since it isn't here.
    // let limits scope to the block ...  
    // 
    // console.log(`In the FUNCTION - ${value}`);
}

getValue(0);
