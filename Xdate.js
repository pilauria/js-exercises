function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  let date = userDate.split('/');

  date.reverse();
  let second = date[1];

  date.splice(1, 1);
  date.push(second);
  date.toString(); // remove
  return date.join('');
}

console.log(formatDate('12/31/2014')); //20141231

function twoDigit(second) {
  if (second >= 0 && second < 10 && Math.floor(second) === second) {
    let formattedNumber = ('0' + second).slice(-2);
    return formattedNumber;
  } else {
    return second;
  }
}

console.log(twoDigit(1));

//edge case

// descructuring

// function formatDate(input) {
//   let date = input.split('/').reverse();
//   let temp = date[2];
//   date[2] = date[1];
//   date[1] = temp;
//   date[1] = twoDigit(date[1]);
//   date[2] = twoDigit(date[2]);
//   return date.join('');
// }
// function twoDigit(val) {
//   val = ('0' + val).slice(-2);
//   return val;
// }
// console.log(formatDate('7/8/2021'));
