// let, const & var

/*var: Variable can be re-declared & updated. A global scope variable.

let: Variable cannot be re-declared but can be updated. A block scope variable.

const: Variable cannot be re-declared or updated. A block scope variable.*/

var book1 = "Island Green";
var book1 = "Orange Cloud"; //allowed (not a good way)

//Always Use
let book2;
book2 = "Walking Blue";
book2 = "Good Bad Day"; // allowed

const book3 = "Sky Above the Pigeons";
// book3 = 'cold dusty wind';   //show error
