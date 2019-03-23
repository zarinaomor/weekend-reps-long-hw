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
    // console.log("moooo");
} else {
    // console.log("Hey! You're not a cow.");
}

// E. Driver's Ed

// Make a variable that will hold a person's age. Be semantic.
var personAge = 4;
// Write code that will print out "Here are the keys", if the age is 16 years or older.
if(personAge >= 16) {
    // console.log("Here are the keys");
} else {
    // console.log("Sorry, you're too young.");
}
// If the age is younger than 16, a message should print "Sorry, you're too young."

// II. Loops

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive.
for (let i=0; i<=10; i++) {
    // console.log(i);
}
// Write a loop that will print out all the numbers from 10 up to and including 400.
for (let i=10; i<=400; i++) {
    // console.log(i);
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000.
for (let i=0; i<4000; i++) {
    // console.log(i);
}

// B. Get even
// Print out the even numbers that are within the range of 1 - 100.
for (let i=0; i<=100; i++) {
    if(i % 2 === 0) {
        // console.log(i);
    }
}

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".

for (let i=1; i<=100; i++) {
    if(i % 2 === 0) {
        // console.log(i + " is the EVEN number");
    }
}


// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.

for (let i=1; i<=100; i++) {
    if(i % 5 === 0) {
        // console.log("I found a " + i + "." + " High five!" );
    }
}

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.

for (let i=1; i<=100; i++) {
    if(i % 5 === 0) {
        // console.log("I found a " + i + "." + " High five!" );
    } else if(i % 3 === 0) {
        // console.log("I found a " + i + "." + " Three is a crowd")
    }
}

// D. Savings account

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.


// let sum = 0;
// for (let i=1; i<=10; i++) {
//     sum += i;
  
// }
// let bank_account = sum;
// console.log("$"+ bank_account);


// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// let sum = 0;
// for (let i=1; i<=100; i++) {
//     sum += i * 2;
  
// }
// let bank_account = sum;
// console.log("$"+ bank_account);


// E. Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// let sum = 0;

let sumOfNumbers = 0;
for (let i=1; i<10; i++) {
    if(i % 3 === 0 || i % 5 ===0) {
       sumOfNumbers += i;
    }
}
// console.log(sumOfNumbers);

// Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you've done has helpful bits of code in it that partially solves this problem, look back at them.
let sum = 0;
for (let i=1; i<1000; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
        sum += i;
     }
}

// console.log(sum);

// III. Arrays & Control flow

// What are the things in an array called?
// Each variable or object in an array is called an element.

// Do Arrays guarantee those things will be in order?
// Yes. Arrays are ordered collections

// What real-life thing could you model with an array?
// Arranging books, Bullet points (to do lists) etc

// B. Easy Does It

// Create an array that contains three quotes and store it in a variable called quotes.

// const quotes = ["Talk is cheap", "“Programs must be written for people to read, and only incidentally for machines to execute.",  ]

// C. Accessing elements

// Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true];

// How do you access the 1st element in the array?
randomThings[0];
// Change the value of "Hello" to "World".
randomThings[2] = 'World';
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings);

// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?

ourClass[2];

// Change the value of "Github" to "Octocat"

ourClass[4] = "Octocat";

// Add a new element, "Cloud City" to the array.

ourClass.push('Cloud City');

// console.log(ourClass);

// E. Mix It Up

// Given the following array: const myArray = [5, 10, 500, 20]

const myArray = [5, 10, 500, 20]

// Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.

myArray.push('Egon', 'Swan');

// Remove the 5 from the beginning of the array.

myArray.pop();

// Add the string "Bob Marley" to the beginning of the array.

myArray.unshift('Bob Marley');

// Remove the string of your choise from the end of the array.

myArray.splice(4);

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?

myArray.reverse();

// console.log(myArray);

// F. Biggie Smalls

// Create a variable that contains an integer.
 
const integer = 10.2;

// Write an if ... else statement that:

if(integer < 100) {
    // console.log('little number');
} else if(integer >= 100) {
    // console.log('big number');
}

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.

// G. Monkey in the Middle
// Write an if ... else if ... else statement:

// console.log() little number if the number entered is less than 5.

const num = 6;

if(num < 5) {
    // console.log('little number');
} else if(num > 10) {
    // console.log('big number');
} else {
    // console.log('monkey');
}
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey". 

