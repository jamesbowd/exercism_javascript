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
  let value = "";
  for (let i = 0; i < 2; i++) {
    switch (arr[i]) {
      case "black":
        value += "0";
        break;
      case "brown":
        value += "1";
        break;
      case "red":
        value += "2";
        break;
      case "orange":
        value += "3";
        break;
      case "yellow":
        value += "4";
        break;
      case "green":
        value += "5";
        break;
      case "blue":
        value += "6";
        break;
      case "violet":
        value += "7";
        break;
      case "grey":
        value += "8";
        break;
      case "white":
        value += "9";
        break;
    }
  }
  return parseInt(value);
};

// const decodedValue = (arr) => {
//   let value = 0;
//   for (color of arr) {
//     switch (color) {
//       case "black":
//         value += 0;
//         break;
//       case "brown":
//         value += 1;
//         break;
//       case "red":
//         value += 2;
//         break;
//       case "orange":
//         value += 3;
//         break;
//       case "yellow":
//         value += 4;
//         break;
//       case "green":
//         value += 5;
//         break;
//       case "blue":
//         value +=6;
//         break;
//       case "violet":
//         value +=7;
//         break;
//       case "grey":
//         value += 8;
//         break;
//       case "white":
//         value += 9;
//         break;
//     }
//   }
//   return value;
// };
