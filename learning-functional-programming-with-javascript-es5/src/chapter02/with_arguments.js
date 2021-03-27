function callWith2Args(arg1, arg2, func) {
  return func(arg1, arg2);
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

console.log(callWith2Args(1, 2, add));
console.log(callWith2Args(10, 2, substract));
