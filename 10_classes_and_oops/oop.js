const user = {
    username: "justin",
    loginCount: 8,
    signedIn:true,
    
    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
//console.log(user.getUserDetails());
console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    //return this
    this.greeting = function(){
        console.log(("Welcome ${this.username"));
    }
}

const userOne = User("jusitn", 15, true)
const userTwo = User("Jason", 13, false)
console.log(userOne);
console.log(userTwo);
