function ensure(value) {
  // Your code goes here
  if (
    value === undefined ||
    value === '' ||
    value === null ||
    Number.isNaN(value) ||
    value === 0
  ) {
    throw 'error';
  } else {
    return value;
  }
}

try {
  console.log(ensure());
} catch (err) {
  console.log(err);
}

// throws an error if called without arguments or arguments is undefined. Otherwise it should return the given value

// document.getElementsByClassName('remove')[0].click();
// console.log(document.body.innerHTML);

// document.getElementsByClassName('remove')[0].click();
