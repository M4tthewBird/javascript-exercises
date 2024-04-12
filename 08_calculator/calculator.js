const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	let sum = 0
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
  } else {
    sum = 0;
  }
  return sum
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current)
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(n) {
	if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
