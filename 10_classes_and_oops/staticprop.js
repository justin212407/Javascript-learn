class User{
    constructor(username){
        this.username = username
    }
    logMe(){
    console.log(`Username: ${this.username}`);   
    }

    static createid(){
        return `123`
    }
}

const justin = new User("Justin")
// console.log(justin.createid())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
