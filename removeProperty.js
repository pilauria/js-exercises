const general = {
  io: 'pietro',
  id: 12,
};

// // delete mimmo.io;
// // console.log(mimmo);

// function removeProperty(obj, prop) {
//   for (prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//       delete obj.prop;
//       return true;
//     } else {
//       false;
//     }
//   }
// }

function removeProperty(obj, prop) {
<<<<<<< HEAD
  if (obj[prop] !== undefined) {
    delete obj[prop];
    return true;
=======
  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      delete obj.prop;
      return true;
    } else {
      false;
    }
>>>>>>> 71e80ed670efc73eaf2981be00b33fbeab581c31
  }
  return false;
}

// function has(object, key) {
//   return object ? hasOwnProperty.call(object, key) : false;
// }

<<<<<<< HEAD
removeProperty(general, 'id');
=======
removeProperty(general, 'io');
>>>>>>> 71e80ed670efc73eaf2981be00b33fbeab581c31
console.log(general);
