let buttons = document.querySelectorAll('.remove');

function setup() {
  // Write your code here.
  buttons.forEach(button => {
    button.addEventListener('click', removeMe);
  });
}

function removeMe() {
  this.closest('div').remove();
}

setup();

// function setup() {
//   // Write your code here.
// }

// // Example case.
// document.body.innerHTML = `
// <div class="image">
//   <img src="https://goo.gl/kjzfbE" alt="First">
//   <button class="remove">X</button>
// </div>
// <div class="image">
//   <img src="https://goo.gl/d2JncW" alt="Second">
//   <button class="remove">X</button>
// </div>`;

// setup();

// document.getElementsByClassName('remove')[0].click();
// console.log(document.body.innerHTML);
