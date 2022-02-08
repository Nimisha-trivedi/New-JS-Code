const prices = [100, 100, 100, 100, 100, 100, 100, 100, 100, 300];
// findPrice(prices);

const distinctPrices = [...new Set(prices)];
var sum = 0;
for (const x of distinctPrices) {
  sum += x;
}

console.log("price:" + sum / distinctPrices.length);
