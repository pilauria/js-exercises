// Initial code
const board = [
  [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
  ],
  [
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
  ],
  [
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
  ],
];

const player = {
  x: 1,
  y: 1,
  path: [{ x: 1, y: 1 }],
};

// 1. Move the player horizontally
function placeHorizontal(thePlayer, command) {
  if (thePlayer.y >= 0 && thePlayer.y < 2) {
    if (command === 'l') {
      thePlayer.y--;
    } else {
      thePlayer.y++;
    }
    console.log(`Player has position: x=${thePlayer.x}, y=${thePlayer.y}`);

    let newPosition = { x: thePlayer.x, y: thePlayer.y };
    thePlayer.path.push(newPosition);
  } else {
    console.log("You can't place player outside of the board!");
  }
}

// 2. Moving the player vertically
function placeVertical(thePlayer, command) {
  if (thePlayer.x >= 0 && thePlayer.x < 2) {
    if (command === 'u') {
      thePlayer.x--;
    } else {
      thePlayer.x++;
    }

    console.log(`Player has position: x=${thePlayer.x}, y=${thePlayer.y}`);

    let newPosition = {
      x: thePlayer.x,
      y: thePlayer.y,
    };

    thePlayer.path.push(newPosition);
  } else {
    console.log("Youuuuu can't place player outside of the board!");
  }
}

// 3. Enable multiple commands
function command(thePlayer, orders) {
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    switch (order) {
      case 'l': // left
        placeHorizontal(thePlayer, order);
        break;
      case 'r': // right
        placeHorizontal(thePlayer, order);
        break;
      case 'u': // up
        placeVertical(thePlayer, order);
        break;
      case 'd': // down
        placeVertical(thePlayer, order);
        break;
    }
  }
  console.log(thePlayer.path);
}

command(player, 'lurrddd');
