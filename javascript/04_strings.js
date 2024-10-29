//In js, you can declare strings using 3 ways
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

//single and double quote strings are the same
//however backtick strings are called template literals, they have 2 special properties:
//you can embed javascript variables or expressions
//you can declare template literals over multiple lines

//this is a template literal that embeds a js variable
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

//template literals are more readable than traditional '+' concatenation

const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/

//you can convert a string into a number using Number() method
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

//or convert a number into a string using String() method
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string


//STRING METHOD examples
//ALL string methods return a NEW value
//they do NOT change the original value
//https://www.w3schools.com/jsref/jsref_obj_string.asp - method references

//length method returns the length of the string
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

//charAt method returns the character at the index of the string
let text = "HELLO WORLD";
let char = text.charAt(0);

//returns a UTF-16 code
let text = "HELLO WORLD";
let char = text.charCodeAt(0);

//at method gets the 3rd string of name
const name = "W3Schools";
let letter = name.at(2);

//alternatively, use index
const name = "W3Schools";
let letter = name[2];

//If no character is found, [ ] returns undefined, while charAt() returns an empty string.
let text = "HELLO WORLD";
text[0] = "A";    // Read only, gives no error, but does not work

//slice() method extracts a part of the string and returns the extracted part
// 2 params, start index and end index
// if you omit the end index, it will slice the rest of the string
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

//substring is similar but negative param values are treated as 0
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);

//convert string to upper case or lower case
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
let text2 = text1.toLowerCase();

//concat method as an alternative to '+', does same thing
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

//trim removes whitespace from either side of the string
let text1 = "      Hello World!      ";
let text2 = text1.trim(); // output "Hello World!"
let text2 = text1.trimStart(); // output "Hello World!      "
let text2 = text1.trimEnd(); // output "       Hello World!"

//padStart() method pads a string from the start.
//Pad a string with "x" until it reaches the length 4
let text = "5";
let padded = text.padStart(4,"x"); //xxx5
let padded = text.padEnd(4,"0"); //5000

//repeat() method returns a string with a number of copies of a string.
//repeat() method returns a new string.
//repeat() method does not change the original string.
let text = "Hello world!";
let result = text.repeat(2); //output Hello world!Hello world!

//replace() method replaces a specified value with another value in a string
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
//output is Please visit W3Schools

//To replace case insensitive, use a regular expression with an /i flag (insensitive)
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");

//To replace all matches, use a regular expression with a /g flag (global match)
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

//replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");


//A string can be converted to an array with the split() method:
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe

