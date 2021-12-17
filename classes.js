// class is a blueprint for creating objects

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  const myCar = new Car("Ford", 2014);
document.write(myCar.name + " " + myCar.year)  

// How to define and use a Class method
class item {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let myItem = new item("Ford", 2014);
document.write("my car is " + myItem.age() + " years old")


