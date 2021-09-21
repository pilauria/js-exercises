let products = [
  [
    { product: 'hoodie', price: 101, size: 'M' },
    { product: 'shirt nike', price: 45, size: 'XL' },
  ],

  [
    { product: 'sweatpants', price: 70, size: 'S' },
    { product: 'shirt adidas', price: 49, size: 'L' },
  ],
];

function sortBySize(products) {
  // your code
  let sizesSM = [];
  let sizesLXL = [];
  let obj = { sizesSM, sizesLXL };
  products.map((arrayProduct, i) => {
    // console.log(arrayProduct);
    return arrayProduct.map((product, i) => {
      // console.log(product.size);
      if (product.size === 'S' || product.size === 'M') {
        sizesSM.push(product);
      } else {
        sizesLXL.push(product);
      }
      return { sizesSM, sizesLXL };
    });
  });
  return obj;
}

console.log(sortBySize(products));
// console.log(products[0][0].size);
// let Obj = { product: [] };

// let arrayOne = [products];
// // console.log(arrayOne);
// // Obj.product.push(arrayOne);
// console.log(Obj);
