function countRec(choc, wrap) {
  if (choc < wrap) return 0;

  let newChoc = choc / wrap;

  return newChoc + countRec(newChoc + (choc % wrap), wrap);
}

function countMaxChoco(money, price, wrap) {
  let choc = money / price;

  return choc + countRec(choc, wrap);
}

let money = 21;
let price = 1;

let wrap = 3;
console.log(
  "Number of choclate is:" + Math.floor(countMaxChoco(money, price, wrap))
);
