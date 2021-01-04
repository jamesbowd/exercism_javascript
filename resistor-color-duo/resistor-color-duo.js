//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// The colors are mapped to the numbers from 0 to 9 in the sequence:
// Black - Brown - Red - Orange - Yellow - Green - Blue - Violet - Grey - White

// From the example above:
// brown-green should return 15
// brown-green-violet should return 15 too, ignoring the third color.

export const decodedValue = (arr) => {
  const resistorArray = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];

  let value1 = resistorArray.indexOf(arr[0]);
  let value2 = resistorArray.indexOf(arr[1]);

  return value1 * 10 + value2;
};
