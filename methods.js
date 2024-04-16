// Callback function => a function passed as an argument to another function.

let arr1 = [1, 2, 3, 4, 5, 6, 7];
arr1.forEach(function printVal(val) {
  //val(at each index)
  console.log(val);
});

//arrow
let arr2 = ["kashi", "mathura", "delhi"];
arr2.forEach((val) => {
  //val(at each index)
  console.log(val.toUpperCase());
});
