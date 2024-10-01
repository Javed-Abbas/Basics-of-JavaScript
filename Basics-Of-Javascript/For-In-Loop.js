//using for-in loop on onjects
const obj = {
    js: "Javascript",
    cpp: "C++",
    rb: "Rubby",
    swift: 'swift by Apple'
}

for (const key in obj) {
    // console.log(`${key}: shortcut is ${obj[key]}`);
}

//using for-in loop on Arrays
const arr = ["apple","mango","banana","pine-apple"];

for (const key in arr) {
    // console.log(`${arr[key]}`);
}


//using for-in loop on map
const map1 = new Map();
map1.set("Pak", "Pakistan");
map1.set("UAE", "Emirates");
map1.set("Fr", "France");

for (const map in map1) {
    console.log(map);
}

//maps is not iterateAble so we cannot use any lop on it;

