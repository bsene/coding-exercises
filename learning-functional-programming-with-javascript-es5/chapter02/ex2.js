const DEBUG_ENABLED = false;
let debug = doNothing;
if (DEBUG_ENABLED) {
  debug = printMessage;
}
debug("Some debug message");

function printMessage(message) {
  console.log(message);
}

function doNothing() {}
