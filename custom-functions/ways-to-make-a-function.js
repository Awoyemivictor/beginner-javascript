
/* FUNCTION DECLARATIONS - Explicit return
They allow for Hoisting 
(which means that JavaScript will take all function
    keyword and hoist them up, up, up and says
    "you're a function, you belong at the top of the 
    file. That means anywhere you call the function,
    it'll be available to you. 
- Explicit return (having to type the return keyword) 
- There are curly brackets 
- Need for parenthesis () even with a single function parameter */
function inchToCM1(inches) {
    return inches * 2.54;
}

/* FUNCTION EXPRESSIONS (Variable Functions)
    JavaScript does not hoist variable functions 
    - Variable function is an anonymous function 
    - Explicit return (having to type the return keyword) 
    - There are curly brackets 
    - Need for parenthesis () even with a single function parameter */
const inchToCM2 = function(inches) {
    return inches * 2.54;
}

/* ARROW FUNCTION
    - Arrow function is also an anonymous function 
    - Implicit return (Not having to type the return keyword) 
    - There are no curly brackets 
    - No need of parenthesis () around a single function parameter */
const inchToCM3 = inches => inches * 2.54;


/* iffy FUNCTION (immediately invoked function expression) 
    - Function will be wrapped by parenthesis (parenthesis always run first in JavaScript)
    - It returns the value which you can immediately run by putting parenthesis on the end
    - It can as well takes in parameters
*/

(function(age) {
    return `You are cool ${age}`;
})(3);

/* Method Function
    - Method is simply a function that lives inside of an object 
    - */

    const wes = {
        name: "Victor",
        sayHi: function() {
            console.log(`Hey ${this.name}`);
        },
        // Short hand Method
        yellHi() {
            console.log("Hey Wes");
        },
        // Arrow function
        whisperHi: (name1) => {
            console.log(`Hiii ${name1} in a mouse`);
        },
    };

/* CALLBACK FUNCTION 
    - A function that is passed as an argument to another function
    - Callback function run after another function has finished
    - Types: Click callback & Timer callback
*/

// Click Callback
const press = document.querySelector(".clickMe");
press.addEventListener("click", 
    function() {
        console.log("Nice Job!");
    });

// Timer Callback
setTimeout(function() {
    console.log("TIME TO EAT BREAKFAST!")}, 2000);

// W3Schools Examples
function myFirst() {
    return myDisplayer = ("Hello");
}

function mySecond() {
    return myDisplayer = ("Goodbye");
}


const calNum = {
    name: "victor",
    myAdd: function(a, b) {
        total = a + b;
        return `${this.name.toUpperCase()}, Your result is ${total}`;
    },
    mySub(a, b) {
        total = a - b;
        return `${this.name.toUpperCase()}, Your result is ${total}`;
    },
    myDiv: (a, b) => {
        total = Math.floor(a / b);
        return `Your result is ${total}`;
    },
};

function doALotOfStuff() {
    console.group("Doing some stuff");
    console.log("I'm one");
    console.warn("watch out!");
    console.error("hey");
    console.groupEnd("Doing some stuff");
}