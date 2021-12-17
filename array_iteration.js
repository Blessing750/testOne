// for each method
const items = ["juice", 24, "fruit", 33];
//items.forEach(item =>document.write(item));

/*function list(value) {
    text += value + "<br>";
}*/

// map method : ceates a new array by performing a function on each array
const numbers1 = [2, 4, 6, 8, 10];
const numbers2 = numbers1.map(numeric);
function numeric(value, index, array) {
    return value * 2
}
document.write("<br>", numbers2)

// filter method : creates a new array with array elements that passess a test
const numbers3 = [2, 4, 6, 8, 10];
const numbers4 = numbers3.filter(num);
function num(value, index, array) {
    return value > 2
}
document.write("<br>", numbers4)

// array.includes check if an element is present in an array
document.write(items.includes("juice"));
