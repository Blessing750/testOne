const sugarPrice = 10;
const quantiy = 2;
const totalPrice = sugarPrice*quantiy;
console.log(totalPrice+' is your final price');
var carName = "Volvo";
console.log(carName)
const name = "blessing";
const age = 22;
// document.write("\n" + name + " is " + age + " years old")

let x = 5;
x++;
let z = x;
// document.write(x)

// document.write(typeof(5))


function greet(name, lastName) {
    // document.write("hello" + name + " " + lastName)
};
greet("blessing", "ajose");

// examples of object

const student = {
    firstName :"Jane",
    lastName : "Obi", 
    age : 21,
    gender : "fair",
    height : "average",
    location : "abuja"
};
    document.write(student.firstName)
   
// method is a function stored as a property
// methods for extracting a part of a string
// 1. slice(start, end)
// 2. substring(start, end) : it can`t accept negative indexes
// 3. substr(start, length)

const fruits = "apple, mango, orange, pawpaw";
//document.write(fruits.length)
document.write(fruits.slice(0, 10));

// to replace with another string
const poem = "<br> pawpaw is a kind of fruits";
const rep = poem.replace("kind", "type");
document.write(rep)

const text = "<br> blessing is a beautiful girl";
const text2 = text.replace("a beautiful", "an attractive");
document.write(text2)
// changing text to lower or upper case
const item = "<br> Hello World!";
const items = item.toUpperCase();
document.write(items)

// to concat strings
const get = "<br> this is";
const get1 = "amazing";
const get2 = get.concat(" ", get1);
document.write(get2)

/*const word = "<br> 5";
const padded = word.padStart(4,0);
document.write(padded)

const $a = "hello world";
// this will return the unicode of the character 
const char = $a.charCodeAt(0);
document.write(char)*/

/*const str = "i am going to the mall";
document.write(str.indexOf("the"))
document.write(str.lastIndexOf("am"))
document.write(str.search("going"))

to search a word in a string and print out how many times it occurs

const te = "The rain in SPAIN stays mainly in the plain";
document.write(te.match(/ain/i));
const $i = "The rain in SPAIN stays mainly in the plain";
document.write($i.match(/ain/gi));*/

// The includes() method returns true if a string contains a specified value.
const a = "Hello world, welcome to the universe.";
document.write(a.includes("world"));


// The startsWith() method returns true if a string begins with a specified value, otherwise false:
const hi = "Hello world, welcome to the universe.";
document.write(hi.startsWith("Hello"));
document.write(hi.startsWith("Hello", 3));

//The endsWith() method returns true if a string ends with a specified value, otherwise false:
const list = "where are you";
document.write(list.endsWith("you"))

// Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

