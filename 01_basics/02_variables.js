const accountId = 123456
let accountEmail = "akhilesh@gmail.com"
var accountPassword = "122344566"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "pathak@gmail.com"
accountPassword = "3232425355"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue is in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
