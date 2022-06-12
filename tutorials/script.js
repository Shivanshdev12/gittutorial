let name = {
  firstName: "Shivansh",
  lastName: "Mehrotra",
};

let aboutMe = function (state) {
  console.log(
    `Hi My name is ${this.firstName} ${this.lastName}. I'm from ${state}`
  );
};

aboutMe.call(name, "UttarPradesh");

aboutMe.apply(name, ["UttarPradesh"]);

let Intro = aboutMe.bind(name, "UttarPradesh");

Intro();

let Student = {
  age: 20,
};

let printAge = function () {
  console.log(`Student Age is ${this.age}`);
};
let studentAge = printAge.bind(Student);
studentAge();

//Currying
let multiply = function (x, y) {
  console.log(x * y);
};

let multipltyByTwo = multiply.bind(this, 2);
multipltyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

let multiplyAgain = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyAgainByTwo = multiplyAgain.bind(2);
multiplyAgainByTwo(3);
