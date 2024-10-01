class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }

}

const Username = new Teacher("Javed", "Javed@example.com","123")
Username.logMe();

const masalaChai = new User("MasalaChai")
masalaChai.logMe();

console.log(Username === Teacher);
console.log(Username === User);

console.log(Username instanceof Teacher);
console.log(Username instanceof User);
