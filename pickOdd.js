function pickOdd(arr) {
  const oddNumbers = []; // do not remove or change this line

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNumbers.push(arr[i]);
    }
  }

  return oddNumbers; // do not remove or change this line
}
console.log(pickOdd([2, 10, 2, 6]));
