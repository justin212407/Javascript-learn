// if statement

// const isUserLoggedIn = true
// const tempereature = 41
// if (tempereature === 40){
//     console.log("less than 50");
// }else{
//     console.log("tempereature is greater than 50");
// }
// console.log("execute");


// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
//  console.log(`User power: ${power}`;


// const balance = 1000
//  if (balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard ){
    console.log("Allow to buy");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}