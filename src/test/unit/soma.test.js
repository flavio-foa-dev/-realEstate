const { sum } = require('../../verify/calc.js');

describe('calc', function () {
  it('should sum two numbers', function () {
    const num1 = 10;
    const num2 = 12;

    const result = sum(num1, num2);

    expect(result).toBe(22);
  });
});
