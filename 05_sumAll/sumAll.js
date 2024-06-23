const sumAll = function (num1, num2) {
  if (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    num1 >= 0 &&
    num2 >= 0
  ) {
    let sumAll = 0;
    let start = num1 < num2 ? num1 : num2;
    let end = num1 < num2 ? num2 : num1;
    for (let i = start; i <= end; i++) {
      sumAll += i;
    }
    return sumAll;
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
