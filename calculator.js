function add(num1, num2) {
  if (num1 >= 0 && num2 >= 0) {
    return num1 + num2;
  };
};

function subtract(num1, num2) {
  return num1 - num2;
}

function sum(array) {
  if (array.length === 0) {
    return 0;
  } else {
    const reducer = (total, currentVal) => total + currentVal;
    return array.reduce(reducer);
  }
}

module.exports = {add, subtract, sum}