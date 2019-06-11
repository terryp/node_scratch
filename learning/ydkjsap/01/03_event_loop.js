var eventLoop = [];
var event;

while (true) {
  if (eventLoop.length > 0) {
    event = eventLoop.shift();

    try {
      event();
    } catch (err) {
      reportError(err);
    }
  }
}
