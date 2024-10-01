//object literal
const user = {
    username: "Javed",
    loginCount: "8",
    signIn: true,

    getUserDetails: function(){
        // console.log("got user deatails from database");
        // console.log(`username: ${this.username}`); //current context 
        // console.log(this); //it will print current context like uper object(user)
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


/*************************************Constractor Function******************** */

// const promiseOne = new Promise();
// const date = new Date();


function user(username,loginCount,isLogedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLogedIn = isLogedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this;
}


const userOne = new user("javed",4,true);
const userTwo = new user("Abbas",6,false);
console.log(userOne);
