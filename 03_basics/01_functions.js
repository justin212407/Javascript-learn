;


function sayMyName(){
console.log("J");
console.log("U");
console.log("S");
console.log("T");
console.log("I");
console.log("N")
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
 const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);


function loginUserMessage(username = "sam"){
if(!username){
    console.log("Please enter a UserName");
    return
}
    return `${username} just logged in`
}
//console.log(loginUserMessage("justin"))
console.log(loginUserMessage())
