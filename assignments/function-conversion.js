// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = () => {
    console.log("Function was invoked!");
    };
myFunction();

let anotherFunction = (param) => {
    return param;
    };
console.log(anotherFunction("Example"));

let add = (param1, param2) => {
   return param1 + param2;
 };
console.log(add(1,2));

let subtract = (param1, param2) => {
   return param1 - param2;
};
console.log(subtract(1,2));


// Stretch

exampleArray = [1,2,3,4];
const triple = exampleArray.map(num => num * 3);
console.log(triple);