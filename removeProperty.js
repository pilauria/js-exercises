const general = {
  io: 'pietro',
  id: 12,
};

// delete mimmo.io;
// console.log(mimmo);

function removeProperty(obj, prop) {
  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      delete obj.prop;
      return true;
    } else {
      false;
    }
  }
}

// function has(object, key) {
//   return object ? hasOwnProperty.call(object, key) : false;
// }

removeProperty(general, 'io');
console.log(general);
