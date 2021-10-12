// const object1 = { a: 'foo', b: 42, c: {} };

// const { a, b, c } = object1;

// console.log(a);
// let e = 'foo',
//   b = 42,
//   c = {};

// // Shorthand property names (ES2015)
// let o = { e, b, c };

// // In other words,
// console.log(o.e === { e }.e); // true

const items = ['A', 'B', 'C'];
const obj = {
  [items]: 'Hello',
};
console.log(obj); // A,B,C: "Hello"
console.log(obj['A,B,C']); // "Hello"

let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

function jsengine(code) {
  return code.split(' ');
}
console.log(jsengine('var a = 5'));
