//Exercise:
const a = function () {
  console.log(this);
  const b = function () {
    console.log(this);
    const c = {
      hi: function () {
        console.log(this);
      },
    };
    c.hi();
  };
  b();
};

a(); // window, window, { hi: [Function: hi] }
//window.a(b()) a was called by window,same as b, c was called from the function hi.

////////////////////////

// Dinamic scope vs lexical scope
const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherFunction = function () {
      console.log('b', this);
    };
    anotherFunction();
  },
};

console.log(obj.sing());

// obj didn't call anotherFunction, the sing function did.

const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherFunction = () => {
      console.log('b', this);
    };
    anotherFunction();
  },
};

const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherFunction = function () {
      console.log('b', this);
    };
    return anotherFunction.bind(this);
  },
};

const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var self = this;
    var anotherFunction = function () {
      console.log('b', self);
    };
    return anotherFunction;
  },
};
