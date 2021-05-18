// Exporting module

// Private variables that just this module have access
const shippingCost = 10;
export const cart = [];
export default (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// Named exports
export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 200;
const totalQuantity = 23;
// Named exports multiple variables
// you can give a new name as the moment of the export
// using the keyword as
export { totalPrice, totalQuantity as tq };
