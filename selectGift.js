let arr = [
  { name: "Teddy", price: 440 },
  { name: "Purse", price: 249 },
  { name: "Novel", price: 300 },
];
function pricedesc(a, b) {
  if (a.price < b.price) {
    return 1;
  }
  if (a.price > b.price) {
    return -1;
  }
  return 0;
}
let result = arr.sort(pricedesc);
console.log(result[1].name);
