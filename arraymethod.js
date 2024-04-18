let arr = [1, 2, 3, 5, 6, 7]; //map
let arr2 = arr.map((val) => {
  return val * 2;
});
console.log(arr2);

let arr3 = arr.filter((val) => {
  //filter
  return val % 2 == 0;
});
console.log(arr3);
