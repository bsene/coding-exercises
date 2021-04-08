var numbers = [1, 2, 3, 4, 5];

// var numbersCubed = [];

// imperative version
// for (var i = 0; i < numbers.length; i++) {
//   var element = numbers[i];

//   numbersCubed.push(Math.pow(element, 3));
// }

// functional version
var _ = require("lodash");

var numbersCubed = _.map(numbers, function (element) {
  return Math.pow(element, 3);
});

console.log(`numbers: ${numbers}`);
console.log(`numbersCubed: ${numbersCubed}`);
