// Importing module
// import add from './shoppingCart.js';
// add('Breads', 5); // 5 Breads added to cart

// Named imports must be enclosed in curly braces except
// if you're using all (*) namespace also calling names need to
// be like they have been declared in module file

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('Breads', 5); // 5 Breads added to cart
// console.log(ShoppingCart.tq); // 23
// console.log(ShoppingCart.totalPrice); // 200

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('Breads', 5); // 5 Breads added to cart
// console.log(price); // 200
// console.log(tq); // 23

// const ShoppingCart = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//     );
//   };
//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart.addToCart('Breads', 5); // 5 Breads added to cart (shipping cost is 10)
// ShoppingCart.addToCart('Pizza', 2); // 2 Pizza added to cart (shipping cost is 10)
// console.log(ShoppingCart.shippingCost); // undefined

// // NOTE:
// // Exports is an object in nodejs
// exports.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart `);
// };

// // Import
// const { addToCart } = require('./shoppingCart.js');
// New additions to language (ex. find and Promise)
import 'core-js/stable';
// Async function conversion library
import 'regenerator-runtime/runtime.js';
import { addToCart, totalPrice as price, tq, cart } from './shoppingCart.js';
import { cloneDeep } from 'lodash-es';

addToCart('Breads', 5); // 5 Breads added to cart
console.log(price); // 200
console.log(tq); // 23

// Lodash

if (module.hot) {
  module.hot.accept();
}

const state = {
  cart: [
    { product: 'Breads', quantity: 5 },
    { product: 'Pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const cloneState1 = Object.assign({}, state);
const cloneState2 = cloneDeep(state);

state.user.loggedIn = false;
console.log(cloneState1); // loggedIn: false
console.log(cloneState2); // loggedIn: true

// Convert to ES5 with parcel who includes babel
class Person {
  #greet = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greet}, ${this.name}`);
  }
}

const jesus = new Person('jesus');

console.log('Jesus' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('Jesus').then(x => console.log(x));
