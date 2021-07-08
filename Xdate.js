function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  let date = userDate.split('/');

  date.reverse();
  let second = date[1];

  date.splice(1, 1);
  date.push(second);
  date.toString();
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
