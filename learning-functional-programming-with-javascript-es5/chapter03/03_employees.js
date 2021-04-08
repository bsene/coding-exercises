var _ = require("lodash");
var employees = [
  { name: "John", salary: 50000 },
  { name: "Susan", salary: 60000 },
  { name: "Greg", salary: 100000 },
  { name: "Mary", salary: 120000 },
];

// imperative version
// var dueForRaise = [];
// for (var i = 0; i < employees.length; i++) {
//   var employee = employees[i];
//   if (employee.salary < 70000) {
//     dueForRaise.push(employee);
//   }
// }

//functional version
var dueForRaise = _.filter(employees, function (employee) {
  return employee.salary < 70000;
});

console.log(`due for raise: ${JSON.stringify(dueForRaise)}`);
