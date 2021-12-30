// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

// function convertToRoman(numToConvert) {
//   // list all relevant numbers and numerals
//   const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   const roman = [
//     'M',
//     'CM',
//     'D',
//     'CD',
//     'C',
//     'XC',
//     'L',
//     'XL',
//     'X',
//     'IX',
//     'V',
//     'IV',
//     'I',
//   ];

//   // Create an empty string for the result
//   let result = '';

//   // Loop through the numbers while the numToConvert is greater than the number, keep looping
//   numbers.forEach(function (number, i) {
//     while (numToConvert >= number) {
//       // add numerals as you go eg. 55 --> loop numbers, find L, loop again, find V
//       result += roman[i];
//       numToConvert -= number;
//     }
//   });

//   return result;
// }

// console.log(convertToRoman(52)); // LII
// console.log(convertToRoman(1120)); // MCXX
// console.log(convertToRoman(09)); // IX

// console.log(convertToRoman(52)); // LII
// console.log(convertToRoman(1120)); // MCXX
// console.log(convertToRoman(09)); // IX

/////////////////////////////////////
let lookupTable = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToRoman(num) {
  // create  lookup table (roman numeral to number)
  // (we have it outsiden of the function)
  // create accumulator (our string builder)
  let accumulator = '';
  // loop through the table
  for (const key in lookupTable) {
    const numberValue = lookupTable[key];
    console.log(numberValue);
    while (numberValue <= num) {
      num -= numberValue;
      accumulator += key;
    }
  }
  // whie (currentNumber <= num), subtract currentNumber from num. Add symbol to accumulator

  return accumulator;
}

console.log(convertToRoman(36));
