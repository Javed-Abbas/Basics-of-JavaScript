const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async Task compelete");
        resolve(); //it is connected with then() if it note use promises will nor work properly
    },1000)
})

promiseOne.then(function(){
    // console.log("Promise consumed");
})



//second way
const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async task 2");
        resolve();
    },1000)

    
}).then(function(){
    // console.log('consumed 2 is completed');  
})


//Promise 3rd way
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        // resolve(["javed","abbs",'shahid', 'abbas']);        
    },1000)
}).then(function(user){
    console.log(user);  
    
})


//Promise 4rth Way

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({username:"javed",password:"123"});
        }else{
            reject('Erroe: something went wrong')
        }
    }, 1000);
}).then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The Promise is either resolved or rejected");
})


const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
          resolve({ username: "javed", password: "123" });
        } else {
          reject("Erroe: something went wrong");
        }
    },1000)
})


async function consumePromiseFive(){
   try {
    const response = await PromiseFive;
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
   
}

consumePromiseFive();


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
    } catch (error) {
        console.log('E:', error)
    }
}

getAllUsers();