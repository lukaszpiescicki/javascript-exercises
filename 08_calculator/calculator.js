const add = function(...args) {
  let sum = 0;
	if (args){
    for (const arg of args){
      sum += arg;
    }
  }else{
    sum = 0;
  }
  return sum;
};

const subtract = function(num1, num2) {
  return num1-num2;
};

const sum = function(...args) {
  let sum = 0;
  if(args.length > 1){
    for (const arg of args){
      sum += arg;
    }
  }else{
    for(const arg of args[0]){
      sum += arg;
    }
  }

  return Number(sum);
};

const multiply = function(...args) {
  let result = 1;
  for (const arg of args[0]){
    result *= arg;
  }
  return result;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(number) {
	let result = 1;
  for (let i = number; i >=1; i--){
    result *= i; 
  }
  return result;
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
