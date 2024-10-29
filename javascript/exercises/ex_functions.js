function add7(number) {
    return number + 7
}

function multiply(number1, number2) {
    return number1 * number2
}

function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase()
}

function lastLetter(word) {
    return word.substring(word.length - 1)
}

console.log(add7(4))
console.log(multiply(3,3))
console.log(capitalize("brandon"))
console.log(lastLetter("abcd"))