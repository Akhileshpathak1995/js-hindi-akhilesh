//const tinderUser = new Object()   //this is a singleton object
const tinderUser = {}      //this is a non singletone object

tinderUser.id = "123abc"
tinderUser.name = "Ramji"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

const regularUser = {
    email: "ram@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Akhilesh",
            lastname: "Pathak"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)     or
//const obj3 = Object.assign({}, obj1, obj2)    //{} its not mandetary and there will be no effect on the result

const obj3 = {...obj1, ...obj2}
//console.log(obj3)

const users = [
    {
        id: 1,
        email: "akp@gmail.com"
    },
    {
        id: 2,
        email: "akp@gmail.com"
    },
    {
        id: 3,
        email: "akp@gmail.com"
    },
    {
        id: 1,
        email: "akp@gmail.com"
    }
]

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));