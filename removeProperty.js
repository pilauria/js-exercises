const mimmo = {
  io: 'pietro',
  mommo: 'zizzi',
};

// delete mimmo.io;
// console.log(mimmo);

function removeProperty(obj, prop) {
  if (prop in obj) {
    delete obj.prop;
    console.log(obj);
    true;
  } else {
    false;
  }
}

// function has(object, key) {
//   return object ? hasOwnProperty.call(object, key) : false;
// }

removeProperty(mimmo, 'io');
console.log(mimmo);
