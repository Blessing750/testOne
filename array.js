// array is a special variable which can hold more than one value
const cars = ["saab", "volvo", "camry", "ford"];
document.write(cars)

// you can also create an array and provide the elements
const houses = [];
houses[0] = "bungalow";
houses[1] = "self-contain";
houses[2] = "one bedroom flat";
document.write("<br>", houses)

//accessing array elements
const names = ["miracle", "blessing", "grace", "jane"];
document.write("<br>", names[3])

// changing an array element
// arrays use numbers to access it`s elements while object use names
const friends = ["katerin", "victoria", "esther", "john"];
friends[3] = "jane";
document.write("<br>", friends)
// to get the length
const fruits = ["lemon","apple","lime", "banana", "mango", "pawpaw"];
// document.write("<br>", fruits.length)

// document.write("<br>", fruits[1])



// how to loop over array using for loop
/* let len = fruits.length;
let text = "<ul>";
for (let i = 0; i < len; i++) {
    text += "<li>" + fruits[i] + "</li>";
text += "</ul>";
}
document.write(text)*/

// you should use object when u want the element names to be strings 
// and arrays when u want the element names to be numbers

// how to recognise an array
// document.write(typeof(fruits)); // it returns object because a javascript array is an object
// document.write(Array.isArray(fruits));


//      ARRAY METHODS
// converting arrays to string
// document.write(fruits.toString())

// join behaves like tostring but it can specify the seperator
// document.write(fruits.join(" * "))

// to add items in an array
// fruits.push("orange", "melon");
// document.write("<br>", fruits)

// .pop removes the last item in an array

// shift method removes the first element and shifts the other element to the left
//fruits.shift();
//document.write(fruits)

// the unshift method adds a new element to an array at the beginning
// fruits.unshift("lemon", "guava", "carrot");
// document.write(fruits)

// the length method is an easy way to add elements in an array without using the push method
// fruits[0] = "kiwi";
// fruits[fruits.length] = "kiwi";
// document.write(fruits)

// splicing an array
// fruits.splice(2, 2, "lime", "kiwi"); // the first parameter defines the position where new elements
// should be added and the second parameter how many elements to be removed
// document.write(fruits)


//         MERGING TWO ARRAYS
/* const myGirls = ["faith", "jane", "katerin"];
const myBoys = ["joe", "frank", "fred"];
const students = ["stanley", "grace", "junior"]
const myChildren = myGirls.concat(myBoys, students);
document.write(myChildren)*/

//   SLICING AN ARRAY

//const juice = fruits.slice(1);
//document.write(juice)

// the slice method can also take two arguments
// the first parameter selects element from start and the second parameter the end 

//const juice = fruits.slice(0, 2);
//document.write(juice)

//     SORTING AN ARRAY
//fruits.sort(); // to sort in ascending order
//document.write(fruits)

//fruits.sort()
//fruits.reverse(); // to sort in descending order
//document.write(fruits) 

// fisher yates method is to shuffle the elements in an array
//    FINDING HIGHEST OR LOWEST ARRAY VALUE
const points = [122, 54, 98, 20, 58];
document.write(points.sort(function(a, b) {return a - b})); // sorting in ascending order
document.write(points.sort(function(a, b) {return a - b})); // sorting in descending order 


