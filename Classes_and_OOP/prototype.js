const myName = "javed";
// console.log(myname.length);   //this method will be show length of myName=5 

const myFullName = "Javed-Abbas     ";
// console.log(myFullName.truelength);     //but i want to apply truelength method to remove extra-spaces without using any trim() method

let myHeros = ["Thor","spiderman"]

let heroPower = {
    thore: "hammer",
    spiderame: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.javed = function(){
    console.log(`Javed is present in all objects`);
    
}

// heroPower.javed();

/********************Inheritance ***************************/

const User = {
    username: "chai",
    email: "Chai@Exampe.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}


const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    //old syntax
    __proto__: TeachingSupport
}
//old syntax
// Teacher.__proto__= User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "Jam Javed      "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Javed".trueLength();
"iceTea".trueLength();