// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // return str.split('').reverse().join('');

  return str.split('').reduce((revString, char) => char + revString, '');
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  let rex = /[^A-Za-z0–9]/g;
  let lowReStr = str.toLowerCase().replace(rex, '');
  let revString = lowReStr.split('').reverse().join('');
  return revString === lowReStr;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = parseInt(int.toString().split('').reverse().join(''));
  return revString * Math.sign(int);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
// function capitalizeLetters(str) {
//   let strLowerArr = str.toLowerCase().split(' ');
//   let newStr = strLowerArr.map(word => {
//     let firstLetter = word.substring(0, 1).toUpperCase();
//     let restOfWord = word.substring(1);
//     let newWord = `${firstLetter}${restOfWord}`;
//     return newWord;
//   });
//   return newStr.join(' ');
// }

// function capitalizeLetters(str) {
//   let strLowerArr = str.toLowerCase().split(' ');
//   let newWord = strLowerArr.map(word => {
//     return word.substring(0, 1).toUpperCase() + word.substring(1);
//   });
//   return newWord.join(' ');
// }

// function capitalizeLetters(str) {
//   let strLowerArr = str
//     .toLowerCase()
//     .split(' ')
//     .map(word => {
//       return word.substring(0, 1).toUpperCase() + word.substring(1);
//     });
//   return strLowerArr.join(' ');
// }

// function capitalizeLetters(str) {
//   const strArr = str.toLowerCase().split(' ');
//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] =
//       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
//   }
//   return strArr.join(' ');
// }
// /////////////////////////////
// function capitalizeLetters(str) {
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.substr(1))
//     .join(' ');
// }
/////////////////////////////
function capitalizeLetters(str) {
  return str.replace(/\b[a-z]/gi, function (char) {
    return char.toUpperCase();
  });
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}

// Call Function
const output = capitalizeLetters('lA pIllOnola');

console.log(output);
