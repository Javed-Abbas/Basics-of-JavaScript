// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);



let PI = {
  chai: "ginger chai",
  price: "250",
  isAvailable: true,

  orderChai: function(){
    console.log("chai nhi bni");
    
  }
};

// console.log(Object.getOwnPropertyDescriptor(PI, "chai"));


Object.defineProperty(PI, "chai", {
    //writable: false,
    enumerable: true,
    //configurable:true
});

// console.log(Object.getOwnPropertyDescriptor(PI,"chai"));


for (let [key,value] of Object.entries(PI)) {
    if (typeof value != 'function') {
        
        console.log(`${key}: ${value}`);
    }
    
}