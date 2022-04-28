console.log("For Loop 1-10");
for (i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("For Loop 10-1");
for (i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("While loop 1-10");
let w = 1;
while (w <= 10) {
  console.log(w);
  w++;
}

console.log("While loop 10-1");
let x = 10;
while (x >= 1) {
  console.log(x);
  x--;
}

console.log("Do While loop 1-10");

let y = 1;
do {
  console.log(y);
  y++;
} while (y <= 10);

console.log("Do While loop 10-1");

let z = 10;
do {
  console.log(z);
  z--;
} while (z >= 1);

console.log("Array For...Of loop");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (number of numbers) {
  console.log(number);
}

console.log("Extended Challenge");
let string = "word";

for (i = string.length; i <= 10; i++) {
  string = " " + string;
  // console.log(string);
}

console.log(string);
