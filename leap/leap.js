//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }

  // divisible by 4 == true
  // divisible by 100 = false
  // divisible by 100 and 400 = true
  // anything else = false
};
