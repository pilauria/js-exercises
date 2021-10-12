function makePerson(first, last) {
  return {
    first: first,
    last: last,
  };
}

function personFullName(person) {
  return person.first + ' ' + person.last;
}

function personFullNameReversed(person) {
  return person.last + ', ' + person.first;
}

var s = makePerson('Simon', 'Willison');
personFullName(s); // "Simon Willison"
personFullNameReversed(s); // "Willison, Simon"

/* The above works, but it's pretty ugly. You end up with dozens of functions in your global namespace. What we really need is a way to attach a function to an object. Since functions are objects, this is easy: */

function makePerson(first, last) {
  return {
    first: first,
    last: last,
    fullName: function () {
      return this.first + ' ' + this.last;
    },
    fullNameReversed: function () {
      return this.last + ', ' + this.first;
    },
  };
}

var s = makePerson('Simon', 'Willison');
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"

/* We can take advantage of the this keyword to improve our makePerson function: */

function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function () {
    return this.first + ' ' + this.last;
  };
  this.fullNameReversed = function () {
    return this.last + ', ' + this.first;
  };
}

var s = new Person('Simon', 'Willison');

function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function () {
  return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function () {
  return this.last + ', ' + this.first;
};
