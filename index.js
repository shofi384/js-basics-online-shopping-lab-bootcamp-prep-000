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
 return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length < 1) {
    return 'Your shopping cart is empty.'
  }
  else if(cart.length === 1) {
    return 'Your shopping cart is empty.'
  }
  var result = 'In your cart, you have '
  var count = 0;
  while(count<cart.length-1) {
    result += `${cart[count].itemName} at $${cart[count++].itemPrice}, `
  }
  result += `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  return result;
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
