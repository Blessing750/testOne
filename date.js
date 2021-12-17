/*const d = new Date();
//document.write(d)

const a = new Date(2021, 10, 29, 17, 28, 30, 0);
document.write(a)

const b = new Date();
b.toString;
document.write("<br>", b)


const c = new Date();
c.toUTCString;
document.write("<br>", b)


const j = new Date();
j.toDateString;
document.write("<br>", b)


const i = new Date();
i.toISOString;
document.write("<br>", b)*/

// types of date formats
// 1. ISO date format is wriiten in this format(year,month,day)
/*const d = new Date("2015-03-25");
document.write(d)
const a =new Date("2021-03");
document.write("<br>", a)

const x =new Date("2021");
document.write("<br>", x)

// 2. short date
const z = new Date("03/25/2015");
document.write("<br>", z)

// 3. Long dates : are most often written with a "MMM DD YYYY" syntax like this:
const f = new Date("Mar 25 2015");
document.write("<br>", f)
// month and day can be in any order, month can be written in full or abbreviated*/


//    DATE METHODS
// 1. The getTime() method returns the number of milliseconds since January 1, 1970:
/*const time = new Date();
document.write(time.getTime());

// 2. The getFullYear() method returns the year of a date as a four digit number:
const year = new Date();
document.write("<br>", year.getFullYear());

// 3. The getMonth() method returns the month of a date as a number (0-11):
const mon = new Date();
document.write("<br>", mon.getMonth());
// to return the month as a name
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
"October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
document.write("<br>", month)

// 4. The getDate() method returns the day of a date as a number (1-31):
const date = new Date();
document.write("<br>", date.getDate());

// 5. The getHours() method returns the hours of a date as a number (0-23):
const hour = new Date();
document.write("<br>", hour.getHours());

// 6. The getMinutes() method returns the minutes of a date as a number (0-59):
const minute = new Date();
document.write("<br>", minute.getMinutes());

// 6. The getSeconds() method returns the seconds of a date as a number (0-59):
const sec = new Date();
document.write("<br>", sec.getSeconds());

// 7. The getMilliseconds() method returns the milliseconds of a date as a number (0-999):
const millisec = new Date();
document.write("<br>", millisec.getMilliseconds());

// 8. The getDay() method returns the weekday of a date as a number (0-6):
const day = new Date();
document.write("<br>", day.getDay());
// to return the weekday as a name
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const b = new Date();
let dayz = days[b.getDay()];
document.write("<br>", dayz)*/



//      SET DATE METHODS
// Set Date methods are used for setting a part of a date:
const setyear = new Date();
setyear.setFullYear(2020);
document.write(setyear)

// The setMonth() method sets the month of a date object (0-11):
const setmonth = new Date();
setmonth.setMonth(11);
document.write("<br>", setmonth)

// The setDate() method sets the day of a date object (1-31):
const setdate = new Date();
setdate.setDate(11);
document.write("<br>", setdate)

// The setHours() method sets the hours of a date object (0-23):
const sethour = new Date();
sethour.setHours(11);
document.write("<br>", sethour)

// The setMinutes() method sets the minutes of a date object (0-59):
const setmin = new Date();
setmin.setMinutes(11);
document.write("<br>", setmin)

// The setSeconds() method sets the seconds of a date object (0-59):
const setsec = new Date();
setsec.setMonth(11);
document.write("<br>", setsec)

//    COMPARING DATES
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
document.write(text)














