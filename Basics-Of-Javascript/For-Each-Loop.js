const coding = ["js","rubby","c++","swift"];

coding.forEach(function (items){
    // console.log(items);
});

//arrow function in for-each loop
coding.forEach( (items)=>{
    // console.log(items);
});

coding.forEach((items, index, arr)=>{
    // console.log(items, index, arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    // console.log(item.languageFileName);
    // console.log(item.languageName);
})

const langauges = ["js", "rubby", "c++", "swift"];

langauges.forEach((item)=>{
    console.log(item);
    return item;
})

//notes
//for-each did not return any value
