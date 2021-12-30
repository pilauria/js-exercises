const matrix = [
  [
    { product: 'MacBook', price: 1019, category: 'tech' },
    { product: 'Cheerios', price: 5, category: 'food' },
  ],

  [
    { product: 'Snickers', price: 1.5, category: 'food' },
    { product: 'Air Pods', price: 129, category: 'tech' },
  ],
];

// console.log(matrix[0][0]);
// console.log(matrix[0].category);

function sortProducts(matrix) {
  let Obj = {
    tech: [],
    food: [],
  };
  for (let i = 0; i < matrix.length; i++) {
    // console.log(matrix[i]);
    for (let y = 0; y < matrix[i].length; y++) {
      if (matrix[i][y].category === 'tech') {
        Obj.tech.push(matrix[i][y]);
      } else {
        Obj.food.push(matrix[i][y]);
      }
    }
  }
  return Obj;
}

console.log(sortProducts(matrix));
