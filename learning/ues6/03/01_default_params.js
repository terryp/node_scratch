function makeRequest(url, timeout, callback) {
    timeout = timeout || 2000;
    callback = callback || function();

    // In each of the cases above, a logical OR (||) is leveraged
    // to say to the function "If you don't get a timeout or a 
    // callback parameter set them to 2000 ms or this anonymous
    // function."

    // This though doesn't control for "falsy" arguments. 
    // So see the next example.
}
