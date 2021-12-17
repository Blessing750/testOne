/*const bool = Boolean(5 > 3)
document.write(bool)

const hour = 12;
if (hour < 12) {
    greeting = "good day";
    document.write(greeting)
} else {
    greeting = "good night";
    document.write(greeting)
}*/
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
  document.write(greeting)
} else if (time < 20) {
  greeting = "Good day";
  document.write(greeting)
} else {
  greeting = "Good evening";
  document.write(greeting)
}


//          SWITCH
/* The switch statement is a part of JavaScript's "Conditional" Statements, which are
 used to perform different actions based on different conditions. Use switch to select 
 one of many blocks of code to be executed. This is the perfect solution for long,
  nested if/else statements.*/

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      document.write("Today is " + day)
      break;
    case 1:
      day = "Monday";
      document.write("Today is " + day)
      break;
    case 2:
       day = "Tuesday";
       document.write("Today is " + day)
      break;
    case 3:
      day = "Wednesday";
      document.write("Today is " + day)
      break;
    case 4:
      day = "Thursday";
      document.write("Today is " + day)
      break;
    case 5:
      day = "Friday";
      document.write("Today is " + day)
      break;
    case 6:
      day = "Saturday";
      document.write("Today is " + day)
  }
  // The default keyword specifies the code to run if there is no case match:
switch(new Date().getMonth()) {
    case 0:
        month = "july";
        document.write("<br>", month)
    case 1:
        month = "august";
        document.write(month)
    default:
        document.write("<br> looking forward to ember months")
}

/* Switch cases use strict comparison (===).

The values must be of the same type to match.

A strict comparison can only be true if the operands are of the same type.*/

