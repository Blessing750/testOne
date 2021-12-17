// Set is a collection of unique values. Each value can only occur once in a Set.
// A Set can hold any value of any data type.

// creating a set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

document.write(letters.size)


// creating and calling a set
const friends = new Set(["jane","blessing","catherine"]);

// List all Elements
let text = "";
friends.forEach (function(value) {
  text += value + "<br>";
})
document.write("<br>", text)