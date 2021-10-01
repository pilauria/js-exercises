const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function rot13(str) {
  // create accumulator
  let accumulator = '';
  // loop through the given string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // alphabet includes char?
    const isALetter = alphabet.includes(char);
    // if char is not a letter( is not included in the alphabet array), add it to accumulator
    if (isALetter === false) {
      //  if (!isALetter){}
      accumulator += char;
    } else {
      // first find the index of the letter of the string
      const charIndex = alphabet.findIndex(c => c === char); // A => 0 , Z =>25 ecc..
      console.log(charIndex);
      // then rotate + or - 13(go +/- 13), and add this value to accumuator
      accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13]; // (if a letter a charIndex + 13 doesn't exist, then go backwards by 13)
    }
  }
  return accumulator;
}

console.log(rot13('!!MAMMA!!'));
