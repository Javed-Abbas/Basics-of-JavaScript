//Topic: Functions Scope and mini hoisting        Channel: Chai aur code             Video No: 22
//What is Closure? for this Learn DOM

//Inner Function(Child Function) access kr skta ha bahir waly function ko(Parent Function) This is called closure
//lakin parent Function Child Function ko access nhi kr skta



function one() {
    const username = "Javed";

    function Two(){
        const website= "youtube";
        console.log(username);
    }

    Two();
}

one();


if (true) {
    let username = "JAved";

    if (username==="JAved") {
        let website = "google";
        console.log(username + website);
    }
    // console.log(website); This is not accesable
}

// console.log(username); This is not accessabe

//This is a basic function

addOne(5);    //this is valid for basic function we can acces values bfore the function decleration 
function addOne(num){
    return num + 1;
}

addOne(5);

//This is a expression function
addTwo(5);   //This is not valid in expression function we cannot acces values before the function decleration
const addTwo=function(num){
    return num+2;
}

addTwo(5);
