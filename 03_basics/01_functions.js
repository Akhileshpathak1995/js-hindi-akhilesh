function sayMyName(){
    console.log("A");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
    console.log("E");
    console.log("S");
    console.log("H");
}
//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4);

//console.log("Result: ",result);



function loginUserMessage(username = "sam"){
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just loged in`
}

// const message = loginUserMessage("Akhilesh");
// console.log(message);
//console.log(loginUserMessage("Akhilesh"));
//console.log(loginUserMessage());

function calculateCartPrice(val1, val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,200,400,600,800));

const user = {
    username: "Akhilesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);

handleObject({
    username: "Shyam",
    price: 199
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,600,100]));