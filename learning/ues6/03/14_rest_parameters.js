
// Will error out with a syntax error. 
// 
// SyntaxError: Rest parameter must be last formal parameter
// 

function pick(object, ...keys, last) {
    let result = Object.create(null);

    for(let i = 0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
    }

    return result
}
