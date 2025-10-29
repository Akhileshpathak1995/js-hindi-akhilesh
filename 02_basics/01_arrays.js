//      Array    ==JavaScript arrays are resizable and can contain a mix of different data types.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);


//Array methods

// myArr.push(6)    //add new value
// myArr.push(7)    // add new value
// myArr.pop()      //remove last value

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))



// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


//slice,  splice

// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3);
// console.log("C ", myArr);
// console.log(myn2);

//slice() aur splice() dono JavaScript array methods hain, lekin inka purpose aur behavior poori tarah alag hota hai.
//1. slice() — Copy karta hai (non-destructive)
//slice() ka use array ke ek part ko nikalne (copy karne) ke liye hota hai, bina original array ko badle.
//EXAMPLE
let fruits = ["apple", "banana", "mango", "orange"];
let sliced = fruits.slice(1, 3);

console.log(sliced);  // ["banana", "mango"]
console.log(fruits);  // ["apple", "banana", "mango", "orange"]

//NOTE- Yahan fruits original array change nahi hua. Sirf ek naya array bana jisme "banana" aur "mango" aaye.



//2. splice() — Change karta hai (destructive)
//splice() ka use array me se elements remove/add/replace karne ke liye hota hai, aur ye original array ko modify karta hai.

//EXAMPLE:-
let fruits1 = ["apple", "banana", "mango", "orange"];
let removed = fruits1.splice(1, 2);

console.log(removed); // ["banana", "mango"]
console.log(fruits1);  // ["apple", "orange"]

//Yahan "banana" aur "mango" remove ho gaye, aur original array change ho gaya.
