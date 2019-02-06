
function EventTarget() {
    // blank
}

EventTarget.prototype = {
    constructor: EventTarget,
    emit: function() { },
    on: function() { }
}

var myObject = {};

Object.assign(myObject, EventTarget.prototype)

myObject.emit("somethingChanged")
