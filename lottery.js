// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13];
// x.map((y, i) => {
//   if (y === 0) {
//     console.log(i + 1);
//   }
// });

// function lottery(arr) {
//   arr.map((y, indx) => {
//     if (y === 0) {
//       console.log(indx + 1);
//     }
//   });
// }
// const arr = [1, 2, 3, 4, 5, 6, 0, 8, 9, 10, 11, 12, 13];
// lottery(arr);

function lottery(arr) {
  let result = 0;
  arr.map((y, indx) => {
    if (y === 0) {
      result = indx + 1;
    }
  });
  return result;
}
const arr = [1, 2, 3, 4, 5, 6, 0, 8, 9, 10, 11, 12, 13];

console.log(lottery(arr));
