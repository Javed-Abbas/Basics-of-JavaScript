//Topic: For-Of Loop       Channel: Chai aur code             Video No: 29

// ["","","",];
// [{},{},{}];

//for-of using on array
// const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
// }

//for-of using on string

const greeting = "Hello world!";
for (const str of greeting) {
    // console.log(str);
}

//using for-of loop on map keyword
//maps is used for unique values
const map1 = new Map();
map1.set('Pak', 'Pakistan')
map1.set('UAE', 'Emirates')
map1.set('Fr', 'France')
console.log(map1);

// for (const key of map1) {
//     console.log(map1);
// }

//to get separated values apply this method on map 
//Array Destructuring
for (const [key, value] of map1) {
    //console.log(key, ":>", value);
}   

//using for-of loop on objects
//for-of loop do not work on onjects

// const obj = {
//     firstName: "Javed",
//     lastName: "Abbas",
//     number : '0232355'
// }

// for (const [key, value] of obj) {
//     console.log(key, ":>", value );
// }