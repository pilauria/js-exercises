// let view;
// function initialize() {
//   view = '💫';
//   console.log('view has been sent');
// }

// initialize();
// initialize();
// initialize();
// console.log(view);

// using closures transform the function so that it can be called just once

let initialize2 = () => {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      view = '💫';
      called++;
      console.log('view has been set');
    }
  };
};

const startOnce = initialize2();
startOnce();

//////////////
// to avoid calling initialize2 as well (IIFE)
let view;
var viewImage = (function initialize() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      view = '🏔';
      called++;
      console.log('view has been set!');
    }
  };
})();

// console.log(view)
viewImage();
viewImage();
viewImage();
viewImage();
