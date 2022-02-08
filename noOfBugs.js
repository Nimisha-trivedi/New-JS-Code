// var arr = [[4, 1], [2, 5], [1, 1], [7], [6], [5], [4]];
// var arr2 = Array.prototype.concat.apply([], arr);
// console.log(arr2);
// var total = 0;
// for (i = 0; i < arr2.length; i += 1) {
//   total += arr2[i];
// }
// let mean = total / arr2.length;
// console.log(mean);
// var median = 0;
// let a = arr2.sort();
// console.log(a);
// if (arr2.length % 2 === 0) {
//   median = (arr2[arr2.length / 2 - 1] + arr2[arr2.length / 2]) / 2;
// } else {
//   median = arr2[(arr2.length - 1) / 2];
// }
// console.log(median);

const arr = [[4, 1], [2, 5], [1, 1], [7], [6], [5], [4]];

const arr2 = Array.prototype.concat.apply([], arr);

console.log(arr2);

function calculate(arr2) {
  let total = 0;
  for (let i = 0; i < arr2.length; i++) {
    total += arr2[i];
  }

  let mean = total / arr2.length;
  console.log(mean);
  // return total;
}

console.log(calculate(arr2));
