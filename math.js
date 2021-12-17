// Math.PI returns the ratio of a circle's circumference to its diameter
const a = Math.PI
document.write(a)

/* JavaScript provides 8 mathematical constants that can be accessed as Math properties:
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E */

const e = Math.E
document.write("<br>", e)

const sqr = Math.SQRT2
document.write("<br>", sqr)

const one = Math.SQRT1_2
document.write("<br>", one)

/*   MATH METHODS
There are 4 common methods to round a number to an integer:

Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)*/

// 1. Math.round(x) returns the nearest integer:
const num1 = Math.round(2.57)
document.write("<br>", num1)

// 2. Math.ceil(x) returns the value of x rounded up to its nearest integer:
const num2 = Math.ceil(4.4)
document.write("<br>", num2)

// 3. Math.floor(x) returns the value of x rounded down to its nearest integer:
const num3 = Math.floor(4.4)
document.write("<br>", num3)

// 4. Math.trunc(x) returns the integer part of x:
const num4 = Math.trunc(4.2)
document.write("<br>", num4)

// Math.sign(x) returns if x is negative, null or positive:
const num5 = Math.sign(4)
document.write("<br>", num5)

// Math.pow(x, y) returns the value of x to the power of y:
const pow = Math.pow(2, 4)
document.write("<br>", pow)

// Math.sqrt(x) returns the square root of x:
const sqroot = Math.sqrt(9)
document.write("<br>", sqroot)

// Math.abs(x) returns the absolute (positive) value of x:
const ab = Math.abs(-5)
document.write("<br>", ab)

// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
const m = Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
document.write("<br>", m)

const cos = Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
document.write("<br>", cos)

// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
const minNum = Math.min(10, 45, 87, 05, 66)
document.write("<br>", minNum)

const maxNum = Math.max(10, 45, 87, 05, 66)
document.write("<br>", maxNum)

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
const rand = Math.random()
document.write("<br>", rand)

const numbers = Math.floor(Math.random() * 100); // Returns a random integer from 0 to 99:
document.write("<br>", numbers)

















