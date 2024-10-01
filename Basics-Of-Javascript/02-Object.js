//Topic: Object                  Channel: Chai aur code                  Video No: 17

//const appUser = new Object()                   //this is called singleton method

const appConsumer = {}                            // This is called non singleton method                           

appConsumer.id = "123"
appConsumer.name = "javed"
appConsumer.email = "javed123@gmail.com"

//console.log(appConsumer);
//This method convert object itno array
console.log(Object.keys(appConsumer));          //this method is get keys of object
console.log(Object.values(appConsumer));        //this method is get values of onject
console.log(Object.entries(appConsumer));       //This method is used to convert Object into Array
console.log(Object.hasOwnProperty("email"));     //kia ya value mojood ha object ma? agr ha to: true    agr nhi to: false

const fbUser = {
    UserEmail: "jam1122@gmail.com",
    fullName:{
        userFullname:{
            firstname: "javed",
            lastname: "abbas"
        }
    }
}

//console.log(fbUser.fullName.userFullname.firstname);

const obj1 = {1: "A", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//How to marge one object into other object? Use this method 
const obj3 = Object.assign(obj1,obj2)
const obj4 = {...obj1, ...obj2} // this method is called spread operator
//console.log(obj3);


// Object into Array

const newUser = [
    {
        id: 1,
        email: "Ja123@gmail.com"
    },
    {
        id: 2,
        email: "Jam1234@gmail.com"
    },
    {
        id: 3,
        email: "JamSb123@gmail.com"
    },
]

//access any object's id into the Array by this method 
newUser[1].email