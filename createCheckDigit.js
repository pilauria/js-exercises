// let sumDigit = function (number) {
//   sum = number
//     .toString()
//     .split('')
//     .map(Number)
//     .reduce((a, b) => a + b, 0);
//   return sum;
// };

// console.log(sumDigit(66666));

// function createCheckDigit(membershipId) {
//   // Write the code that goes here.

//   let sum1 = parseInt(sumDigit(membershipId));

//   if (sum1.length === 1) return sum1;

//   let newSum = sumDigit(sum1);

//   while (sum1.length > 1) {
//     newSum();
//     newSum += 1;
//   }
//   return newSum;
// }

// console.log(createCheckDigit('55555'));

let sumDigit = function (number) {
  sum = number
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b, 0);
  return sum;
};

// console.log(sumDigit(66666));

function createCheckDigit(membershipId) {
  // Write the code that goes here.

  let sum1 = parseInt(sumDigit(membershipId));

  let result = '';
  let i = sumDigit(sum1);

  if (sum1.toString().length === 1) {
    return sum1;
  } else {
    do {
      sumDigit(sum1);
      result += i;
    } while (sum1.toString().length > 1);
  }
  return result;
}

console.log(createCheckDigit(55555));
