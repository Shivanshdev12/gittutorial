//fat arrow functions

// let square = (a) => {
//   return a * a;
// };

// console.log(square(2));

// var x = function () {
//   // var that = this;
//   this.val = 1;
//   setTimeout(() => {
//     // that.val++;
//     this.val++;
//     // console.log(that.val);
//     console.log(this.val);
//   }, 1);
// };

// var xx = new x();

// var y = (...n) => {
//   console.log(n[0]);
// };

// y(1, 2, 3);

// class Student {
//   static count = 0;
//   constructor(name, age, ph, marks) {
//     this.name = name;
//     this.age = age;
//     this.ph = ph;
//     this.marks = marks;
//     Student.count += 1;
//   }
// }

// Student.prototype.isEligible = function () {
//   if (this.marks > 40) {
//     console.log("Eligible");
//   } else {
//     console.log("Not eligible");
//   }
// };

// Student.prototype.eligibleforplace = function (reqmarks) {
//   return (age) => {
//     if (this.marks > reqmarks && this.age >= age) {
//       return true;
//     } else {
//       return false;
//     }
//   };
// };

// let S1 = new Student("Eren", 23, 123456, 40);

// let f1 = S1.eligibleforplace(33);
// if (f1(30)) {
//   console.log(S1.name);
// }

// let S2 = new Student("Abc", 36, 1234454, 20);

// let f2 = S2.eligibleforplace(33);
// if (f2(30)) {
//   console.log(S2.name);
// }

// let S3 = new Student("Zeke", 36, 345678, 30);
// let f3 = S3.eligibleforplace(33);
// if (f3(30)) {
//   console.log(S3.name);
// }

// let S4 = new Student("Erwin", 35, 45678, 60);

// let f4 = S4.eligibleforplace(33);
// if (f4(30)) {
//   console.log(S4.name);
// }

// let S5 = new Student("Levi", 31, 897867, 46);
// let f5 = S5.eligibleforplace(33);
// if (f5(30)) {
//   console.log(S5.name);
// }

function execute() {
  // let count = 0;
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM has loaded");
  });
}

execute();
