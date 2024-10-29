//Functions vs Methods
//functions that are a part of an object is called a METHOD

//anonymous functions
//has no name
(function () {
    alert("hello");
});

//For example, let's say you want to run some code when the user types into a text box.
//To do this you can call the addEventListener() function of the text box.
//This function expects you to pass it (at least) two parameters:

//the name of the event to listen for, which in this case is keydown
//a function to run when the event happens.

function logKey(event) {
    console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);

//Instead of defining a separate logKey() function
//you can pass an anonymous function into addEventListener():

textBox.addEventListener("keydown", function (event) {
    console.log(`You pressed "${event.key}".`);
});


//ARROW functions
//If you pass an anonymous function like this,
//there's an alternative form you can use, called an arrow function.
//Instead of function(event), you write (event) =>:

textBox.addEventListener("keydown", (event) => {
    console.log(`You pressed "${event.key}".`);
});

//If the function only takes one parameter
//you can omit the parentheses around the parameter:

textBox.addEventListener("keydown", event => {
    console.log(`You pressed "${event.key}".`);
});

//you can also rewrite 1 line functions into an arrow function with no return statement
const originals = [1, 2, 3];
function doubleItem(item) {
    return item * 2;
}
//into a simpler form that implicitly returns the expression
const doubled = originals.map(item => item * 2);

