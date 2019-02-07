
function setCookie(name, value, options) {
    options = options || {};

    let secure = options.secure, 
        path = options.path, 
        domain = options.domain, 
        expires = options.expires;
}

setCookie("type", "js", {
    secure: true, 
    expires: 60000
});

