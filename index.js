var cart = [];

function getCart() {
 return cart;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var object = {itemName: item, itemPrice: getRandomInt(100)};
 cart.push(object)
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
