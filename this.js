// obj.someFunct(this);

function a() {
  console.log(this);
}
console.log(a()); // because  => windows.a(), a is a property of window (the global object) in this case

function b() {
  'use strict';
  console.log(this);
}
console.log(b()); // => undefined

const obj = {
  name: 'Billy',
  sing: function () {
    return 'lalala' + this.name + '!'; // lalala Billy as  // this is the object that the function (sing in this case) is a property of
  },
  singAgain() {
    return this.sing(); // lalala Billy!
  },
};

////////////////////////////////////
// window.importantPerson()
function importantPerson() {
  // to the left of the dot is window in this case
  console.log(this.name);
}
const name = 'Sunny';

const obj1 = {
  name: 'Cassy',
  importantPerson: importantPerson,
};

const obj2 = {
  name: 'Jacob',
  importantPerson: importantPerson,
};

console.log(importantPerson()); // => 'Sunny' because in this case this is the global object
console.log(obj1.importantPerson()); //  Cassy
console.log(obj2.importantPerson()); // Jacob

//////////////////////////////////
