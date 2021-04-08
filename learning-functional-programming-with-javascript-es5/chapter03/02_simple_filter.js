var _ = require("lodash");
var numbers = _.map(Array(1000).fill(1), function (item, index) {
  return item + index;
});

// imperative version
// var evenNumbers = [];
// for (var i = 0; i < numbers.length; i++) {
//   var element = numbers[i];
//   var isEven = element % 2 === 0;
//   if (isEven) {
//     evenNumbers.push(element);
//   }
// }

// functional version
var evenNumbers = _.filter(numbers, function (item) {
  return item % 2 === 0;
});

console.log(`numbers: ${numbers}`);
console.log(`even numbers: ${evenNumbers}`);
