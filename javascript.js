/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Show some examples in your code that tests
your functions and methods. Use a variation of arrow functions and 
function keyword functions.

Add comments to your code that briefly describe what your code does.

1.

Make the following function:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

******************************************************************************/
console.log("---------------------------------------------");
console.log("Skrive ut svar for første funksjon nedenfor");
console.log("---------------------------------------------");
let testNr1 = 5;
let testNr2 = 44;
let testNr3 = 77;
const oddEven = (testNr) => {
  // sjekk hvis tall delt ved 2 resultat i null
  console.log(testNr % 2 === 0 ? "Even" : "Odd");
};
console.log("Test sample 1: " + testNr1);
oddEven(testNr1);
console.log("Test sample 2: " + testNr2);
oddEven(testNr2);
console.log("Test sample 3: " + testNr3);
oddEven(testNr3);

/******************************************************************************
2.

Make the following function:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/
console.log("---------------------------------------------");
console.log("Skrive ut svar for andre funksjon nedenfor");
console.log("---------------------------------------------");
const textIp1 = "This is my test string";
let textIp2 = "My name in uppercase: Amutha";
console.log("Sample 1 " + textIp1);
console.log(upperCaseChange(textIp1));
console.log("Sample 2 " + textIp2);
console.log(upperCaseChange(textIp2));
function upperCaseChange(stringIp) {
  //her vi bytter tekst til uppercase ved bruk av innbygde method
  return stringIp.toUpperCase();
}
/******************************************************************************
3.

Make the following function:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" if the hour received is 18-23
"Invalid time" if the hour received is greater than 23

If no hour is received, your function should return an error message.

******************************************************************************/
console.log("---------------------------------------------");
console.log("Skrive ut svar for tredje funksjon nedenfor");
console.log("---------------------------------------------");
const ipName = "Amutha";
const timeOfDay1 = 5;
const timeOfDay2 = 8;
var timeOfDay3;
const timeOfDay4 = 12;
const timeOfDay5 = 18;
const timeOfDay6 = 28;
const timeOfDay7 = -8;
console.log(`Name input: ${ipName}`);
console.log("Test Sample 1: " + timeOfDay1);
console.log(greeting(ipName, timeOfDay1));
console.log("Test Sample 2: " + timeOfDay2);
console.log(greeting(ipName, timeOfDay2));
console.log("Test Sample 3: " + timeOfDay3);
console.log(greeting(ipName, timeOfDay3));
console.log("Test Sample 4: " + timeOfDay4);
console.log(greeting(ipName, timeOfDay4));
console.log("Test Sample 5: " + timeOfDay5);
console.log(greeting(ipName, timeOfDay5));
console.log("Test Sample 6: " + timeOfDay6);
console.log(greeting(ipName, timeOfDay6));
console.log("Test Sample 7: " + timeOfDay7);
console.log(greeting(ipName, timeOfDay7));

function greeting(nameIp, timeOfTheDay) {
  // vi bruker her if, else if, else condition for å finne hilsen
  if (timeOfTheDay < 0 || timeOfTheDay > 23) {
    return "Invalid time";
  } else if (timeOfTheDay >= 0 && timeOfTheDay <= 5) {
    return "Good night " + nameIp;
  } else if (timeOfTheDay >= 6 && timeOfTheDay <= 11) {
    return "Good morning " + nameIp;
  } else if (timeOfTheDay >= 12 && timeOfTheDay <= 17) {
    return `Good day ${nameIp}`;
  } else if (timeOfTheDay >= 18 && timeOfTheDay <= 23) {
    return `Good evening ${nameIp}`;
  } else {
    return "Please enter proper time";
  }
}
/******************************************************************************
4.

Make the following function:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
******************************************************************************/
console.log("---------------------------------------------");
console.log("Skrive ut svar for fjerde funksjon nedenfor");
console.log("---------------------------------------------");

const removeFirstAndLast = (stringArray) => {
  stringArray.pop();
  stringArray.shift();
  // her bruker vi unnbygde methoder shift og pop for å fjerne først og ende order in string array
  return stringArray;
};
let array1 = ["Red", "Green", "Blue", "Yellow"];
console.log("Sample 1: " + array1);
console.log(removeFirstAndLast(array1));
let array2 = ["One", "Two", "Three", "Four", "Five", "Six"];
console.log("Sample 2: " + array2);
console.log(removeFirstAndLast(array2));
let array3 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Sample 3: " + array3);
console.log(removeFirstAndLast(array3));
/******************************************************************************
5.

Make the following function:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/

console.log("---------------------------------------------");
console.log("Skrive ut svar for femte funksjon nedenfor");
console.log("---------------------------------------------");

let text1 = "  Javascript is hard   ";
let text2 = " It's hard to use methods ";
let text3 = "   hard        ";
let text4 = "A string without the replace word       ";
const replaceFunction = (textIp) => {
  // her bruker vi unnbygde methoder replace for å utveksle 2 order.
  return textIp.replace("hard", "fun").trim();
};
console.log(replaceFunction(text1));
console.log(replaceFunction(text2));
console.log(replaceFunction(text3));
console.log(replaceFunction(text4));

/******************************************************************************
6.

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

******************************************************************************/

const heroes = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man",
  "Black Widow",
];

console.log("---------------------------------------------");
console.log("Skrive ut svar for sjette funksjon nedenfor");
console.log("---------------------------------------------");
console.log("Inital array " + heroes);
heroes.shift(); // fjerne første item i array
console.log("After removing first item \n" + heroes);
heroes.splice(2, 1, "Skrull");
console.log("After replacing Doctor with Scrull \n" + heroes);
heroes.splice(0, 2, "Captain America");
console.log("After removing Thor, Hulk and adding Captain America \n" + heroes);
console.log(
  "Adding icon between and converting to string\n" + heroes.join("💪")
);

/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/

console.log("---------------------------------------------");
console.log("Skrive ut svar for syvende funksjon nedenfor");
console.log("---------------------------------------------");

function userObjectExample() {
  userName = "Amutha";
  userAge = "30";
}

const userData = {
  userName: "Amutha",
  userEmail: "xyz@gmail.com",
};

const checkInstance = (receivedObj) => {
  //her bruker vi typeof syntax for å finne type av input
  if (typeof receivedObj === "string") return `😎 ${receivedObj} 😎`;
  else if (typeof receivedObj === "number") return `😎 ${receivedObj * 2} 😎`;
  else if (typeof receivedObj === "boolean") {
    if (receivedObj) return "😎Yeah😎";
    else return "😎Chill😎";
  } else return "Primitive values only";
};
let testCase1 = "Checking for String";
let testCase2 = 10;
let testCase3 = true;
let testCase4 = false;
let testCase5 = new userObjectExample();
let testCase6 = [1, 2, 3, 4, 5];
let testCase7 = userData;
console.log(checkInstance(testCase1));
console.log(checkInstance(testCase2));
console.log(checkInstance(testCase3));
console.log(checkInstance(testCase4));
console.log(checkInstance(testCase5));
console.log(checkInstance(testCase6));
console.log(checkInstance(testCase7));

/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/

console.log("---------------------------------------------");
console.log("Skrive ut svar for åttende funksjon nedenfor");
console.log("---------------------------------------------");

function arrayStringGame(arrayIp, stringValue) {
  if (arrayIp.indexOf(stringValue) !== -1) {
    return arrayIp.slice(arrayIp.indexOf(stringValue), 1);
  } else {
    return arrayIp.push(stringValue);
  }
}
let arrayIp1 = ["Red", "Green", "Blue"];
let arrayIp2 = ["One", "Two", "Three"];
console.log("Input Array 1: " + arrayIp1);
arrayStringGame(arrayIp1, "Yellow");
console.log("After checking not present value Yellow \n" + arrayIp1);
arrayStringGame(arrayIp1, "Blue");
console.log("After checking present value Blue \n" + arrayIp1);
console.log("Input Array 2: " + arrayIp2);
arrayStringGame(arrayIp2, "Four");
console.log("After checking not present value Four \n" + arrayIp2);
arrayStringGame(arrayIp2, "One");
console.log("After checking present value One \n" + arrayIp2);
