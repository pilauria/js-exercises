/**
 * Task description: Write a method that returns a deep array like [[key, value]]
 * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * Task complexity: 1 of 5
 * @param {Object} object - Any object to transform into array
 * @returns {Array} - a deep array
 */

const data = { a: 1, b: 2 };

const makePairs = object => {
  return Object.entries(data);
};

console.log(Object.entries(data));
console.log(makePairs(data));

// const makePairs2 = object => Object.keys(object).map(el => [el, object[el]]);

// console.log(makePairs2(data));
// console.log(Object.keys(data));

// const makePairs3 = object => {
//   const result = [];

//   for (const prop in object) {
//     if (object.hasOwnProperty(prop)) {
//       result.push([prop, object[prop]]);
//     }
//   }

//   return result;
// };

// console.log(makePairs3(data));
