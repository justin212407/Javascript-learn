//singleton

//object literals
//Object.create


const mySym = Symbol("key1")

const JsUser = {
    name: "justin",
    "full name" : "Justin Charles",
    [mySym] : "MyKey1",
    age : 18,
    location : "jaipur",
    email : "justin@google.com",
    isLoggedIn : false,
    lasLoginDays : ["Monday", "Saturday"] 
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "justin.chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "justin.microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
