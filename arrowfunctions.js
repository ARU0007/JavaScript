/*Syntax
const functionName = (p1,p2,....)=>{......}
*/

const arrowMultiplication = (x, y) => {
  console.log(x * y);
};

arrowMultiplication(3 * 7);

const countVowels = (str) => {
  for (const char of str) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      count++;
    }
  }
  console.log(count);
};
