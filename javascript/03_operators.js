//two numbers can be literals
let x = 100 + 50
//or variables
let x = a + b
//or expressions
let x = (100+50) * a

// the numbers in an arithmetic operation are called operands
// the operation is defined by an operator
let z = x + a
// the "+" operator is called addition and adds the two operands
// the "%" modulus operator returns the division remainder
// the "++" increments
// the "--" decrements
// the "**" exponentiation raises the first operand to the power of the second
let z = x ** 2

// https://w3schools.com/js/js_precedence.asp
// operator precedence values describe which order the operations are performed
// for instance multiplication and division have higher precedence than addition
let x = 100 + 50 * 3 // 50 * 30 is performed first
let x = (100 + 50) * 3 // parenthesis is always computed first

// the increment or decrement operators can be placed before or after a variable
//postfix form: counter++
//prefix form: ++counter
let counter = 1
let a = ++counter //incremented before counter is assigned to a
console.log(a) // would return 2

let counter = 1
let a = counter++ //incremented after counter is assigned to a
console.log(a) // would return 1