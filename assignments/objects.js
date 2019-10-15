// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:
// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F",
}

// Write your intern objects here:


class internObject {
  constructor(id, email, first, gender) {
    this.id = id;
    this.email = email;
    this.first = first;
    this.gender = gender;
    this.speak = function (){
      return "Hello my name is " + this.first;
    };
    this.multiplyNums = function(param1, param2) {
      return param1 * param2;
    };
  };
};


const internArray = [];
internArray.push(new internObject(0, 'mmelloy0@psu.edu', 'Mitzi', 'F')); 
internArray.push(new internObject(1, 'kdiben1@tinypic.com', 'Kennan', 'M')); 
internArray.push(new internObject(2, 'kmummery2@wikimedia.org', 'Keven', 'M')); 
internArray.push(new internObject(3, 'gmartinson3@illinois.edu', 'Gannie', 'M')); 
internArray.push(new internObject(4, 'adaine5@samsung.com', 'Antonietta', 'F'));
console.log(internArray);


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:
// Mitzi's name
console.log(internArray[0].first);
// Kennan's ID
console.log(internArray[3].id);
// Keven's email
console.log(internArray[2].email);
// Gannie's name
console.log(internArray[3].first);
// Antonietta's Gender
console.log(internArray[4].gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

console.log(internArray[1].speak());
// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
console.log(internArray[4].multiplyNums(2,3));
// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {}

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak
