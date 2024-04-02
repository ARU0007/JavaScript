//for
let str = "Hello, World!";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

//while loop
let str2 = "Green , Rainbow";
let i = 0;

while (i < str2.length) {
  console.log(str2[i]);
  i++;
}

//do while loop
let j = 0;

do {
  console.log("The value of i is: " + j);
  j++;
} while (j < 5);

// for of loop
let str3 = "Hello, World!";

for (let char of str3) {
  console.log(char);
}
