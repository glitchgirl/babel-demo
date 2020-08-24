'use strict'; 
/* this means that we have to follow some rules
this code lines won't work any more
x = "hello"; - variable assignment before declaration 
in regular js we have hoisting 
1) assumes stuff has been declared correctly below assignment
2) pull to bigger scope
won't do weird type casting unless asked.
will perform more strict equality tests.
lets us use let, const more correctly.
*/

function Student(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

  const studentOne = new Student("John", "Doe", 15, "blue");
  const studentTwo = new Student("Sally", "Rally", 18, "green");
  //console.log(Student);
  //console.log(studentOne);
  //console.log(studentTwo.eyeColor);

  //classes

  class Person {
    constructor(first, last, age, gender, interests) {
      this.name = {
        first,
        last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    greeting() {
      console.log(`Hi! I'm ${this.name.first}`);
    };
  
    farewell() {
      console.log(`${this.name.first} has left the building. Bye for now!`);
    };
  }

  let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling', 'flying']);
han.greeting();
console.log(han.interests);

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
      super(first, last, age, gender, interests);
  
      // subject and grade are specific to Teacher
      this.subject = subject;
      this.grade = grade;
    }
  }
  let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions','being dramatic'], 'Dark arts', 5);
snape.greeting(); // Hi! I'm Severus.
console.log(snape.subject);