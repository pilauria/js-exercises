/////////////////////////////////////////////////
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // return str.split('').reverse().join('');

  return str.split('').reduce((revString, char) => char + revString, '');
}

////////////////////////////////////////////////
// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  let rex = /[^A-Za-z0–9]/g;
  let lowReStr = str.toLowerCase().replace(rex, '');
  let revString = lowReStr.split('').reverse().join('');
  return revString === lowReStr;
}

////////////////////////////////////////////////////
// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = parseInt(int.toString().split('').reverse().join(''));
  return revString * Math.sign(int);
}

//////////////////////////////////////////////////
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

// function capitalizeLetters(str) {
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.substr(1))
//     .join(' ');
// }

// function capitalizeLetters(str) {
//   return str.replace(/\b[a-z]/gi, function (char) {
//     return char.toUpperCase();
//   });
// }

////////////////////////////////////////////////////////
// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
// function maxCharacter(str) {
//   // initialize an object to map the caracters in the string (how many times a character shows up)
//   const charMap = {};
//   let maxNum = 0;
//   let maxChar = '';
//   // transform the string in array and loop throuth it to populate the map object
//   str.split('').forEach(char => {
//     // if the character is already present sum it
//     if (charMap[char]) {
//       charMap[char]++;
//       // otherwise start the count at 1
//     } else {
//       charMap[char] = 1;
//     }
//   });
//   // console.log(charMap);
//   // return the highest value (loop through the object)***
//   for (let char in charMap) {
//     // debugger;
//     if (charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }

// function maxCharacter(str) {
//   const charMap = {};
//   str.split('').forEach(char => {
//     charMap[char] ? charMap[char]++ : (charMap[char] = 1);
//   });
//   // console.log(Object.keys(charMap));
//   return Object.keys(charMap).reduce((prev, next) => {
//     // console.log(`the prev is ${prev}: ${charMap[prev]}`);
//     // console.log(next, charMap[next]);
//     return charMap[prev] >= charMap[next] ? prev : next;
//   });
// }

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
// function fizzBuzz() {
//   for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// Call Function
const output = fizzBuzz();

console.log(output);

// // *** looping through objects ***
// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
