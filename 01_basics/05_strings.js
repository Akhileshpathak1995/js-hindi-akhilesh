const name = "Akhilesh"
const repoCount = 50

//console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Akhilesh-ak-pathak')

console.log(gameName[0]);
console.log(gameName.__proto__);

 console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-11, 6)
console.log(anotherString);

const newStringOne = "  Akhilesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Akhilesh.com/akhilesh%20pathak"

console.log(url.replace('%20', '-'))

console.log(url.includes('Akhileshji'));

console.log(gameName.split('-'))

console.log(gameName.bold())

console.log(name.concat(" ", repoCount))

console.log(gameName.endsWith("k"));

console.log(gameName.fixed());

console.log(gameName.fontsize(11));

console.log(gameName.includes("Akhilesh"));