// Primitive
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = fase 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 345634554654654646n



// Refernce (Non-Primitive)

//Arrays, Objects, Functions

const heroes = ["Iron Man", "Hulk", "Spider Man"]
let myObj = {
    name : "justin",
    age : 19,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber);



//************************************************************************************************* */

//Stack(Primitive), Heap(None-Primitive)


let myYoutubeName = "justindotcom"
let anotherName = myYoutubeName
anotherName = "code"

console.log(myYoutubeName)
console.log(anotherName);

let userOne ={
    email : "user@google.com",
    upi : "user@byl"
}

let userTwo = userOne
userTwo.email = "justin@google.com"
console.log(userOne);
console.log(userTwo);

