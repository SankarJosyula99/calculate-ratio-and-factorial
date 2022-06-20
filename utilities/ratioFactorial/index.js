const ratio = require("../ratio/index");
const factorial = require("../factorial/index");
const ratioAndFactorial = (num1, num2, num3) => {
  const ratioOfTwo = ratio(num1, num2);
  const factorialOfLastNum = factorial(num3);
  const result = {
    ratio: ratioOfTwo,
    factorial: factorialOfLastNum,
  };
  return result;
};

module.exports = ratioAndFactorial;
