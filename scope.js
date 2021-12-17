// scope determines the acccessibilty or visibilty of variables
// there are 3 types of javascript scope
// 1. block scope : variables declared inside a block scope cannot be accessed outside
// variables declared within a javascript function becomes local to the function
// 2. function scope : variables declared inside the function cannot be accessed outside the function
// 3. global scope 

// x = 5; 
// var x;
// document.write(x)
// To avoid bugs, always declare all variables at the beginning of every scope.


//         STRICT MODE
// "use strict"; Defines that JavaScript code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.
// Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):
// The "use strict" directive is only recognized at the beginning of a script or a function.

/* "use strict";
x = 3.14;
document.write(x)*/

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
document.write(person.id)


// Arrow functions allow us to write shorter function syntax:

let myFunction = (a, b) => a * b;
document.write(myFunction)

hello = () => {
    return "Hello World!";
  }
document.write("<br>", hello)



