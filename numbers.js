/* const x = 123e3;  
document.write('<br>', x) 
const y = 123e-6;
document.write('<br>', y)


let n = "100";
let o = "10";
let z = n - o;
document.write('<br>', z)

let a = 100 / "10";
document.write(a)

// const b = 123;
// converting interger to string are in 3 ways
// 1. document.write('<br>', b.toString()); 
// or instead of creating a variable, just use the second method
// 2.  or
// document.write((100 + 23).toString());

exponential method
const c = 9.50;
document.write('<br>', c.toFixed(4));
document.write('<br>', c.toExponential(4));

// toPrecision returns a string with a number written with a specified length
let v = 5.25;
//document.write(v.toPrecision());
// valueof returns a number as a number
document.write((123).valueOf()); */

/* there are 3 methods that can be used to convert variables to numbers(i.e global javascript methods)
// 1. number method
document.write(Number("10"));
// number method can also convert date to number
document.write(Number(new Date("2021-11-28")))

// 2. parseint method convert string to whole number, it only returns the first number
document.write(parseInt("10.33"));

// 3. parsefloat also convert strings to number
document.write(parseFloat("20.235")); */

// min value and max value
// max value returns the possible largest number in javascript
const x = document.write(Number.MAX_VALUE);
// number prperties cannot be used on variables for example
const y = 6;
document.write(y.MAX_VALUE);
