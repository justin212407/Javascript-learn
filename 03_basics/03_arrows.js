const user ={
    username : "justin",
    price : 999,
    welcomeMessage: function (){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username = "justin"
//     console.log(this.username);
// }
// chai()

// const chai = function chai(){
//     let username = "justin"
//     console.log(this.username);

// }
// chai()

// const chai = () => {
//     let username = "justin"
//     console.log(this);
//}
//chai()

// const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) => ({username : "justin"})

console.log(addTwo(3,4));
