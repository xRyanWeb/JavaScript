let myPerson = {
  name: "John Doe",
  age: 29,
  isOlder: false
};

// console.log(myPerson.age);
// console.log(myPerson.isOlder);
// console.log(myPerson.name);

let object1 = {
  name: "John Doe",
  age: 29,
  isOlder: false,

  printName: function() {
    console.log(`I am: ${this.name} And I am: ${this.age} Years Old`);
  }
};

const object2 = Object.create(object1);
object1.name = "Ryan";
object1.age = 24;

object2.printName();

// const obj = new Object();
// obj.name = "Ryan";
// console.log(obj["name"]);
// let obj1 = Object.values(object1);

// console.log(Object.keys(object1));

console.log("Name: " + object1["name"]);
console.log("Age: " + object1["age"]);
console.log("isOlder: " + object1["isOlder"]);

// console.log(myPerson["age"]);
// console.log(myPerson["name"]);
// console.log(myPerson["isOlder"]);
