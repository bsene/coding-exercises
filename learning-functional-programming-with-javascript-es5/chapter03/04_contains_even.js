var _ = require("lodash");
var numbers = [];

// imperative version
// var containsEven = false;
// var allEven = true;

// for (var i = 0; i < numbers.length; i++) {
//   var element = numbers[i];
//   if (element % 2 === 0) {
//     containsEven = true;
//   } else {
//     allEven = false;
//   }
// }

//functional version
var containsEven = _.some(numbers, function (item) {
  return item % 2 === 0;
});
var allEven = _.every(numbers, function (item) {
  return item % 2 === 0;
});

console.log(`containsEven: ${containsEven}`);
console.log(`allEven: ${allEven}`);
