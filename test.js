function pickOdd(arr) {
  const oddNumbers = []; // do not remove or change this line

  for (i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(arr[i]);
    }
  }

  return oddNumbers; // do not remove or change this line
}
console.log(pickOdd([2, 4, 5, 6, 7, 8, 9]));

arr1 = [2, 4, 5, 6, 7];

arr2 = [2];

console.log(arr1[2]);

console.log(arr2.push('mamma'));
