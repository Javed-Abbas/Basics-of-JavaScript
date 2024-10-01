//Topic: Arrays                   Youtube channel: chai aur code         Video No: 14

//A collection of multiple items in a single variable is called Array

const myArray = [1,2,3,4,5,6];
const myHeros = ["Allama Iqbal", "Quaid e Azam", "Sir Syed Ahmad khan"]
const Arrays2 = new Array(1,2,3,4,5)
//access any elements in an array by index values 
//console.log(myArray[2])

//************************Array Method ****************************************/
//const myArray = [1,2,3,4,5,6];
myArray.push(7)                   //This method add new element in the end of an Array
//console.log(myArray)
myArray.pop()                     //Tihs method remove last element in the Array
//console.log(myArray)      
myArray.unshift(8)                //This method add new element in the start of an array
//console.log(myArray)
myArray.shift()                   //This method remove new element in the start of an array
//console.log(myArray)
// console.log(myArray.includes(9))  //This method is used for questioning 
// console.log(myArray.indexOf(3))   //This method is used for checking the index of 3

const newArr = myArray.join()        //This method is used to convert all element of an array into a string 
console.log(myArray)
console.log(typeof newArr)

//topic: Slice and splice

//const myArray = [1,2,3,4,5,6];
//console.log("A ", myArray)
const Array1 = myArray.slice(1,3)       //It's mean range is not include
//console.log(Array1)

//console.log("B ", myArray)
const Array2 = myArray.splice(1,3)     //it's mean range is include
//console.log(Array2)
//console.log("C ", myArray)
