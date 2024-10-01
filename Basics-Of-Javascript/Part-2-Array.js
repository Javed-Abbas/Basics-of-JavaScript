//Topic: Arrays part-2                Youtube Channel: chai aur code           Vidoe No: 15

const marval_Heros = ["Thor", "ironman", "spiderman"];
const dc_Heros = ["flash", "superman", "batman"];

//marval_Heros.push(dc_Heros)
//console.log(marval_Heros)        // it marge whole array into first Array
//console.log(marval_Heros[3][2])  // it access 3rd Array's value of 2nd index

const All_Heros = marval_Heros.concat(dc_Heros)  //this is right method to marge second Array into first Array
//console.log(All_Heros);

//But some developer use spread operator 
//this is best method for marge 2 arryas// use this method not other

const All_New_Heros = [...marval_Heros,...dc_Heros];
//console.log(All_New_Heros);

const Another_Array = [1,2,3,[4,5,6],7,8,[7,8,9,[10,11,12]]];
const new_another_array = Another_Array.flat(Infinity)
//console.log(new_another_array);

//console.log(Array.isArray("Javed"))           //thsi mean we asking question that = is this an array or not?if this is Array then it will return "True" othervise "false"
//convert string into Array
//console.log(Array.from("Javed"))             //this method convert string into array   
//console.log(Array.from({name: "Javed"}))     // if we put curli bracket{object} then it will return empty bracket


const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));