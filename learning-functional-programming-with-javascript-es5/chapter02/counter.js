const createCounter = function (count = 0) {
  return {
    increment: function () {
      count += 1;
    },
    currentValue: () => count,
  };
};

const myCounter = createCounter(-2);

console.log(myCounter.currentValue());

myCounter.increment();
myCounter.increment();

console.log(myCounter.currentValue());

myCounter.count = 999; // :(

console.log(myCounter.currentValue());
