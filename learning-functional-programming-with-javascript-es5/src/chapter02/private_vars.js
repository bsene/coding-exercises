const Counter = function (startAt = 0) {
  this.count = startAt;
  this.increment = function () {
    this.count += 1;
  };
  this.currentValue = function () {
    return this.count;
  };
  this.decrement = function () {
    if (this.count > 0) this.count -= 1;
  };
};
function createCounter(startAt = 0) {
  var count = startAt;

  return {
    increment: function () {
      count += 1;
    },
    decrement: function () {
      if (count > 0) count -= 1;
    },
    currentValue: function () {
      return count;
    },
  };
}

module.exports.Counter = createCounter;
