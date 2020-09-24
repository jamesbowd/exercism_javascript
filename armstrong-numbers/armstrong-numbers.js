//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const { RSA_NO_PADDING } = require("constants");

export const isArmstrongNumber = (num) => {
  let sum = 0;
  let numString = num.toString();
  let numStringLength = numString.length;
  let arr = [];

  for (let i = 0; i < numStringLength; i++) {
    arr.push(parseInt(numString[i]));
  }

  for (let i = 0; i < numStringLength; i++) {
    sum += arr[i] ** numStringLength;
  }

  if (num === sum) {
    return true;
  } else {
    return false;
  }
};
