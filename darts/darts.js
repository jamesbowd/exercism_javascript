//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  const r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  console.log(r);
  if (r > 10) {
    return 0;
  }
  if (r <= 10 && r > 5) {
    return 1;
  }
  if (r <= 5 && r > 1) {
    return 5;
  }
  if (r <= 1 && r >= 0) {
    return 10;
  }
};