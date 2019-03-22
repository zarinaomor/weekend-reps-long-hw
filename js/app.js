// A. Q + A

// How do we assign a value to a variable?
// The value is assigned with the '=' operator for const, let or var

// How do we change the value of a variable?
// To change the value of the operator, we access the name of the operator and give it a value. except const. Which can't be redefined

// How do we assign an existing variable to a new variable?
// Create new variable name and assign existing variable name to it. 

// Remind me, what are declare, assign, and define?
// declare - to creat any name after let, var, const
// assign - "=" to give a value to the variable
// define - giving a value; aftr the operator sign

// What is pseudocoding and why should you do it?
// pseudocoding is the thinking process of the problem before to strat coding. F.e. to describe the steps to solve the problem with a regular language, then translate it to JS 

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// 70% pseudocoding, 30% coding

// B. Strings

// Create a variable called firstVariable.
 let firstVariable = "Hello World";
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number.
firstVariable = 100;
// Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariable to any string.
secondVariable = 'Beautiful Day!'
// What is the value of firstVariable?
// Beautiful Day!
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
const yourName = "Zarina";
// console.log('Hello, my name is ' + yourName);


// C. Booleans

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

//   console.log(a < b);
//   console.log(c >= d);
//   console.log('Name' === 'Name');
//   console.log(true > false);
//   console.log(((false && false) === (false || false)) || (false !== (false || true)));
//   console.log(false >= false);
//   console.log(e === 'Kevin');
//   console.log(a <= b !== c);
//   console.log(a === a !== d);
//   console.log(48 >='48');

// D. The farm

// Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit.

const animal = 'dog';
if(animal === 'cow') {
    console.log("moooo");
} else {
    console.log("Hey! You're not a cow.");
}

