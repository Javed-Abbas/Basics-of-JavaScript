//Topic: Functions Local and Global Scope        Channel: Chai aur code             Video No: 21
//Function k scope me sari kahani in Teen(3) keywords ki hoti ha: (Let, var, Const)

//This is called Scope
// {} :Curly Braces

//This is called Global Scope
//let a = 10;
// var b = 20;
// const c = 30;


//This is called Block Scope
if (true) {
    let a = 10;
    var b = 20;
    const c = 30;
}
//Globa Scope ki value Block scope k ander Available hoti ha 
//lakin Block scope ki value Global scope me avilable nhi hoti

//we do not access keyword: (let and const) in the Block scope
//But Keyword: (var) can access everywhere in the scope

//console.log(a);

