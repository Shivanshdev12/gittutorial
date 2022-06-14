class Student {
  static count = 0;
  constructor(name, age, ph, marks) {
    this.name = name;
    this.age = age;
    this.ph = ph;
    this.marks = marks;
    Student.count += 1;
  }
}

Student.prototype.isEligible = function () {
  if (this.marks > 40) {
    console.log("Eligible");
  } else {
    console.log("Not eligible");
  }
};

let S1 = new Student("Eren", 23, 123456, 40);
let S2 = new Student("Abc", 36, 1234454, 20);
let S3 = new Student("Zeke", 36, 345678, 30);
let S4 = new Student("Erwin", 23, 45678, 60);
let S5 = new Student("Levi", 26, 897867, 46);

console.log(Student.count);
