//Topic: Imediately-Invoked-Function-Expression        Channel: Chai aur code             Video No: 23

//What is IIFE Function?
//baaz ukaat Global scope k pollution se ptoblem hoti ha kai baar is problem ko hatany k liye   
//IIFe ka istimaal hota ha 


//This is Basic Function
function basic(){
    console.log(`This is Basic Function`);
}
basic();


//This is IIFE Functon
(function iife(){
    console.log(`This is IIFE Function`)
})();


//This is Arrow IIFE Function
( () =>{
    console.log(`This is Arrow IIFE Function`);
} )();