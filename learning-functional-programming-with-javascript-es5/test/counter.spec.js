const { expect } = require("chai");
const { Counter } = require("../src/chapter02/private_vars.js");

describe("Counter tests suite", () => {
  describe("on initialization", () => {
    it("should initialized with zero", () => {
      const counter = Counter();
      expect(counter.currentValue()).to.equal(0);
    });
    describe("when starts at", () => {
      it("should initialized with 3", () => {
        const counter = Counter(3);

        expect(counter.currentValue()).to.equal(3);
      });
    });
  });
  describe("when incrementing", () => {
    it("should have value of 1 after one increment", () => {
      const counter = Counter();
      counter.increment();
      expect(counter.currentValue()).to.equal(1);
    });
    it("should have value of 3 after three increments", () => {
      const counter = Counter();
      counter.increment();
      counter.increment();
      counter.increment();
      expect(counter.currentValue()).to.equal(3);
    });
  });
  describe("when decrementing", () => {
    it("should not have negativ value", () => {
      const counter = Counter();
      counter.decrement();
      expect(counter.currentValue()).to.be.at.least(0);
    });
    it("should have value of 0 after 1 increment then 1 decrement", () => {
      const counter = Counter();
      counter.increment();
      counter.decrement();
      expect(counter.currentValue()).to.equal(0);
    });
  });
});
