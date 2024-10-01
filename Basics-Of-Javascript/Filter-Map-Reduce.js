//Topic: Filter, Map, Reduce        Channel: Chai aur code             Video No: 30

//filter()
const myNum = [1,2,3,4,5,6,7,8,9,10];
//notes
//first store these values in new variabl then return the value;

const newNums = myNum.filter((numbers)=> {
    return numbers > 5;
})
// console.log(newNums);

//example
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const newBooks = books.filter((bk)=> {return bk.genre === 'History'});
// console.log(newBooks);

const oldBooks = books.filter((kitab)=>{return kitab.edition >= 2000})
// console.log(oldBooks);

/**************************** Maps ********************************************/
const numb = [1,2,3,4,5,6,7,8,9,10];

const newNumber = numb.map((nums)=>{return nums + 10})
// console.log(newNumber);

//chaining 
const myNumbers = numb.map((num)=> num * 10).map((num)=> num + 1).filter((num)=> num >= 40);
// console.log(myNumbers);

/****************************Reducer ********************************************/
const myNumber = [1,2,3,4,5];


// const sumWithInitial = myNumber.reduce((accumulator, currentValue) => accumulator + currentValue, initialVaue);
// console.log(initialVaue);

const initial = myNumber.reduce((accumulator, currentValue)=> {
    console.log(`Accumulator: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue
})
// console.log(initial);

const shoppingCart = [
    {
        items: 'Js course',
        price: 1200
    },
    {
        items: 'Python course',
        price: 1500
    },
    {
        items: 'Java course',
        price: 2000
    },
    {
        items: 'C++ course',
        price: 2500
    },
]

const cartToPay = shoppingCart.reduce((acc,item)=>  acc + item.price,0)

console.log(cartToPay);