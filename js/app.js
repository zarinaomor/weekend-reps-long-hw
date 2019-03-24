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

// const quotes = ["Talk is cheap", "“Programs must be written for people to read, and only incidentally for machines to execute.", "Think opposite"];

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

const kristynsCloset = [
    'left shoe',
    'cowboy boots',
    'right sock',
    'GA hoodie',
    'green pants',
    'yellow knit hat',
    'marshmallow peeps'
  ];

  const thomsCloset = [
    [
      // These are Thom's shirts
      'grey button-up',
      'dark grey button-up',
      'light blue button-up',
      'blue button-up'
    ],
    [
      // These are Thom's pants
      'grey jeans',
      'jeans',
      'PJs'
    ],
    [
      // Thom's accessories
      'wool mittens',
      'wool scarf',
      'raybans'
    ]
  ];

//   What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat"

kristynsCloset.splice(6, 0, 'raybans');


// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

kristynsCloset[5] = 'stained knit hat';
// console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// console.log(thomsCloset[0][0]);

// In the same way, access one item from Thom's pants array.

// console.log(thomsCloset[1][0]);

// Access one item from Thom's accessories array.

// console.log(thomsCloset[2][1]);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

let shirt = thomsCloset[0][0];
let pants = thomsCloset[1][1];
let accessories = thomsCloset[2][1];
// console.log('Thom is looking fierce in a ' + shirt + ',' + pants + ' and ' + accessories);

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

let PJs = thomsCloset[1][2] = 'Footie Pajamas'
// console.log("Thom's wearing this winter " + PJs);

// IV. Functions

// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

const printGreeting = (name) => {
    // console.log('Hello there, ' + name);
}

// printGreeting('Zarina');

const printCool = (name) => {
    // console.log(name + ' is cool');
}

// printCool('Captain Reynolds');

// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = (num) => {
    // return num * num * num;
    // return Math.pow( num , 3 );

}
// console.log(calculateCube(5));

// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.


 
const isVowel = (x) => {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let i=0; i<=vowels.length; i++) {
        if(vowels[i] == x.toLowerCase()) {
            // return true;
        }   
     }
    // return false;
    }
// console.log(isVowel('B'));

//  Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

const getTwoLengths = (str1, str2) => {
   
    // return [str1.length, str2.length]
}

// console.log(getTwoLengths('Hank', 'Hippopopalous'));

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

const getMultipleLengths = (argument) => {
    const length = [];
    for (let i=0; i<argument.length; i++){
        length.push(argument[i].length);
    }
    // return length;
}

// console.log(getMultipleLengths(['hello', 'what', 'is', 'up', 'dude']));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

const maxOfThree = (num1, num2, num3) => {
    // return Math.max(num1, num2, num3);
}

// console.log(maxOfThree(8, 8, 1));

// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.


const printLongestWord = (array) => {
    let longestWord = '';
    for (let i=0; i<array.length; i++) {
        if(array[i].length > longestWord.length) {
            longestWord = array[i];
        }
    }
    // return longestWord;
}

// console.log(
    // printLongestWord([
//       'BoJack',
//       'Princess',
//       'Diane',
//       'a',
//       'Max',
//       'Peanutbutter',
//       'big',
//       'Todd'
//     ])
//   );

// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

const transmogrify = (num1, num2, num3) => {
    // return Math.pow((num1 * num2), 2);
}

// console.log(transmogrify(5, 3, 2));

// GOBACK!!!!!!!!!!!!!

const reverseWordOrder = (string) => {
    let reversedString = '';
    for (let i=string.length-1; i>0; i--) {
        reversedString += string[i];
        for (let j=0; j<reversedString.length; i++) {

        }

    }
    // return reversedString;
}

// console.log(reverseWordOrder('Ishmael me Call'));

// Write a function that will return a random integer between 1 and 10. Test it.

const randomNumber = () => {
    // return Math.floor(Math.random() * 11);
}
// console.log(randomNumber())

// Write a function that will return a random integer between 10 and 100. Test it.

// const randomNum = () => {
//     // return Math.floor(Math.random() * 100) + 10;
// }

// // console.log(randomNum())

// Write a function that will return a random number between 532 and 13267. Test it.

// const randNum = () => {
//     return Math.floor(Math.random() * 13267) + 532;
// }

// console.log(randNum())

// Write a function that will return a random number between 1 and 10. Test it.

// const randomNum = () => {
//     return Math.floor(Math.random() * 10) + 1;
// }

// console.log(randomNum())

// Add a few more quotes to the quotes array from question III-B-1 above.
//  Write a function that will take an array as a parameter, and return a random element from that array. Call your function a few times, passing in the quotes array. Give it a nice semantic name like getRandomElement.

const quotes = ["Talk is cheap", "Think opposite", "Every noble work is at first impossible", "No rain, no flower"];

const getRandomElement = (quotes) => {
    // return quotes[Math.floor(Math.random() * quotes.length)];
}

// console.log(getRandomElement(quotes));



// Objects

// Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.

const user = {
    name: 'Oren',
    age: 18,
    email: "orenoreo@gmail.com",
    purchased: []
}

// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.

user.email = "zomor@yahoo.com";

// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++

user.age++;

// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).

user.location = 'LA';


// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.

user.purchased.push("carbohydrates");


// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.

user.purchased.push("peace of mind");

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.

user.purchased.push("Merino jodhpurs");

// Console.log just the "Merino jodhpurs" from the purchased array.

// console.log(user.purchased[2]);

