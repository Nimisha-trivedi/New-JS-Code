// const reverse = (num, str) => {
//   const strArr = str.split("").reverse().join("");

//   const arr = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   let result = [];
//   for (let i = 0; i < strArr.length; i++) {
//     let char = strArr[i];
//     let indx = arr.indexOf(char);
//     let newIndx = indx + 1;
//     if (newIndx > 26) {
//       newIndx = newIndx - 26;
//     }
//     char = arr[newIndx];
//     strArr[i] = char;
//     result.push(char);
//   }
//   console.log(result.join(""));
// };

// reverse(1, "cat");

//use charCodeAt() and String.fromCharCode string methods.

function reverse(str, num) {
  return str
    .split("")
    .reverse()
    .map(function (item) {
      return String.fromCharCode(item.charCodeAt(0) + num);
    })
    .join("");
}

console.log(reverse("CAT", 1));
