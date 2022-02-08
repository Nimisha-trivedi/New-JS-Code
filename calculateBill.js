const arr = [
  { name: "Biryani", quantity: 2, price: 100 },
  { name: "gulabjamun", quantity: 5, price: 50 },
  { name: "icecream", quantity: 1, price: 70 },
];
let totalPrice = arr.reduce(function (x, item) {
  return x + item.quantity * item.price;
}, 0);
console.log(totalPrice);
