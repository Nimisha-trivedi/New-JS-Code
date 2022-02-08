var today = new Date();
var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

if (today > 0 && today <= 31) {
  if (month > 0 && month <= 12) {
    if (year > 1899 && year <= 2021) {
      console.log("valid date");
    } else {
      console.log("invalid date");
    }
  } else {
    console.log("invalid date");
  }
} else {
  console.log("invalid date");
}
