const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
text = ""
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }
document.write(text)



// while condition

let i = 0;
while(i < 10) {
  document.write("<br>", i);
  i++
}
//       FOR LOOP
//  for - loops through a block of code a number of times
// looping through numbers
tex = ""
for (let i = 2; i < 5; i++) {
    tex += "The number is " + i + "<br>";
  }
document.write("<br>", tex)

// for in statement loops through the properties of an Object
const person = {fname:"John", lname:"Doe", age:25};

let item = "";
for (x in person) {
  item += person[x] + " ";
}
document.write("<br>", item)

const num = [12, 56, 012, 89]
let num2 = "";
for (y in num) {
  num2 += num[y] + " ";
}
document.write("<br>", num2)


//   FOR EACH
// for each loop : Calls a function once for each array element.
const numbers = [45, 4, 9, 16, 25];

let numbers2 = "";
numbers.forEach(myNumbers);

function myNumbers(value, index, array) {
  numbers2 += value + " ";
}
document.write("<br>", numbers2)

//   FOR OF
// for of loop : it loops through values of arrays, strings
const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  document.write("<br>", x);
}

const arrayz = ["BMW", "Volvo", "Mini"];

let cap = "";
for (let a of arrayz) {
  cap += a + " ";
}
document.write("<br>", cap)

const alphebet = "javascript";
let word = "";
for (let a of alphebet) {
  word += a + " <br>";
}
document.write("<br>", word)


//      WHILE LOOP
// The while loop loops through a block of code as long as a specified condition is true
let num3 = "";
let b = 0;
while (b < 10) {
  num3 += "<br>The number is " + b;
  b++;
}
document.write("<br>", num3)

/* In While loop, the condition tested at the beginning of the loop, and if the condition is True, 
statements inside the loop will execute. It means the While loop executes the code block only 
if the condition is True.
At the end of the loop, the Do While loop tests the condition. So, Do While executes the statements
in the code block at least once even if the condition Fails.*/

// example of do while loop

let num4 = "";
let c = 20;

do {
  num4 += "<br>The number is " + c;
  c++;
}
while (c < 10);  

document.write("<br>", num4)

//   USING BREAK STATEMENT
let brk = "";
for (let z = 0; z < 10; z++) {
  if (z === 3) { break; }
  brk += "The number is " + z + "<br>";
}
document.write("<br>", brk)

//   USING THE CONTINUE STATEMENT
// The continue statement skips the current iteration of a loop and immediately jumps to the next one.
// Because of this, the continue statement must appear in the body of a loop, or you will get an error.

let con = "";
for (let r = 0; r < 15; r++) {
  if (r === 3) {continue}
  con += "the number is " + r + "<br>";
}
document.write("<br>", con)


