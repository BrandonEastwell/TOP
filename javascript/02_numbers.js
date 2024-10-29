console.log("Hello, World!")
console.log(25 + 31)
console.log(25 + 32 + 34 + 65 + 32 + 23)
console.log((4+6+9) / 77)
let a = 10
console.log(10)
console.log(9 * a)
let b = 7 * a
console.log(b)
const max = 56 // "constant" cannot reassign
let actual = max - 13 // "let" we can reassign
let percentage = actual / max
console.log(percentage)

//JavaScript has only one type of number
let x = 3.14 // A number with decimals
let y = 3 // A number without decimals

//Extra large or extr small numbers can be written with scientific notation
let x = 123e5
let y = 123e-5


//JavaScript numbers are always 64 bit floating point.
//JavaScript does not define different types of numbers like ints, short, long, floats
const myInt = 5
const myFloat = 6.668
console.log(typeof myInt)
console.log(typeof myFloat)
//both will return "Number"


//Integer Precision
//integers will be accurate up to 15 digits
let x = 999999999999999 // x will be 999999999999999
let y = 9999999999999999 // y will be 10000000000000000


//JavaScript uses the + operator for both addition and concatenation
let x = "10"
let y = "20"
let z = x + y // result in "1020"


//A common mistake is to expect this result to be 102030:
let x = 10
let y = 20
let z = "30"
let result = x + y + z

//Javascript interpreter works from left to right
//first 10+20 is added together since they are numbers (x+y)
//then 30 is concatenated to 30 as z is a string
//resulting in 3030


//Javascript will try to convert strings to numbers in all numeric operations but not +
let x = "100"
let y = "10"
let z = x / y //converts strings to numbers


//NaN - not a number
//trying to do arithmetic operations with a non-numeric string will result in NaN
let x = 100 * "Apple" //string is not a number

//global js function isNaN() to find out if a value is a not a number
isNaN(x)


//infinity (or -infinity) is the value js will return a number outside the largest possible
let num = 2
while (num != Infinity) {
    num = num++
}


//Hexadecimal
//js interprets numeric values as hex if they preceded by 0x
let x = 0xFF

//by default js displays numbers as base 10
//can use toString() method to output numbers from base 2 to base 36
let num = 32
num.toString(2) //binary
num.toString(8) //octal
num.toString(10) //decimal
num.toString(16) //hex


