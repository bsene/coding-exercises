function printMessageNTimes(n, message) {
  for (let i = 0; i < n; i++) {
    console.log(message);
  }
}

function getNthLetter(n, str) {
  if (n !== null && typeof n === "number") {
    if (str !== null && typeof str === "string") {
      return str.charAt(n);
    }
  }
}

function doItSafe(n, message, func) {
  if (n !== null && typeof n === "number") {
    if (message !== null && typeof message === "string") {
      return func(n, message);
    }
  }
}

doItSafe(10, "FP is amazing !", printMessageNTimes);
console.log(doItSafe(4, "Javascript", getNthLetter));
