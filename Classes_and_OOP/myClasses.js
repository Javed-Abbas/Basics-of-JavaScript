// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.emai = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}`;
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const Name = new User("javed","javed@example.com","123")
// console.log(Name.changeUsername());


//behind the scene

function User(username,email,password){
    this.username = username;
    this.emai = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}`;
}


User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}


const changName = new User("javed","javed@example.com","123")
console.log(changName.encryptPassword());
console.log(changName.changeUsername());