// A Map holds key-value pairs where the keys can be any datatype.
// Map is a collection of elements where each element is stored as a Key, value pair.
const fruits = new Map([
    ["apple", 200],
    ["banana", 500],
    ["pawpaw", 400]

])
// The get() method gets the value of a key in a Map:
document.write(fruits.get("banana"))

// You can add elements to a Map with the set() method:
fruits.set("orange", 50)
document.write(fruits.get("orange"))

// The set() method can also be used to change existing Map values:
fruits.set("apple", 100)
document.write(fruits.get("apple"))

// The size property returns the number of elements in a Map:
document.write(fruits.size);

// The delete() method removes a Map element:
fruits.delete("pawpaw")
document.write(fruits.has("pawpaw"))

// looping through a map

const items = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text2 = "";
  items.forEach (function(value, key) {
    text2 += key + ' = ' + value + "<br>"
  })
  document.write(text2)

  // using map entries
  const items2 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text3 = "";
  for (const x of fruits.entries()) {
    text3 += x + "<br>";
  }
  document.write(text3)

  // you can use typeof to find the data type of javascript variable
  document.write(typeof(1245))


// converting dates to numbers
const d = new Date(); 
document.write(Number(d))