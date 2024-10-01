class User{
    constructor(username){
        this.username = username;
    }


    logMe(){
        console.log(`Username:${this.username}`)
    }


    createId(){
        return `123`
    }

    
}

const javed = new User("Javed");
// console.log(javed.createId());



class Teacher extends User {
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const teacher = new User("Javed Abbas", "Jam@example.com");
teacher.logMe();
console.log(teacher.createId());



