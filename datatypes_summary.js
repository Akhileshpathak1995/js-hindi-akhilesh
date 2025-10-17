//Generally there are two type of data type as per official documentation

// 1   Primitive 

// 7 types:   String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;   //undefined 

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id == anotherId);

//const bigNumber = 46788998766554332334n


//2  Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","Ajay"];

let myObj = {
    name: "Akhilesh",
    age: 28
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros)



//https://262.ecma-international.org/5.1/#sec-11.4.3

//Note: JavaScript is a dynamically typed language.




//typeof Operator Result

//Type of val                                 Result
// Undefined                                 "undefined"
// Null                                       "object"
// Boolean                                    "boolean"
// Number                                     "number"
// String                                     "string"
//Function                                     "function object"
//Object                                        "object"
//Array                                          "object"





//================================================================

//Stack (Primitive),               Heap(Non-Primitive)

let myYoutubename = "akhileshpathakdotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}


let userTwo = userOne

userTwo.email = "akhilesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
