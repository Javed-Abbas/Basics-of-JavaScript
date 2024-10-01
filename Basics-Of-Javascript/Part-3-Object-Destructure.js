//Topic: Object-De-Structuring                 Channel: Chai aur code                  Video No: 18

const course = {
    courseName: "Js in Urdu",
    price: "999",
    courseInstructor: "Hitesh"
}

//console.log(course.courseInstructor);

const {courseName: nm} = course;                    //This method is used for De-structuring 

//console.log(nm);

//APIs call in JSON 

//This is the Methiod of Json 

// {
//     "name": "Javed",
//     "age": "19",
//     "Study": "BSCS"
// }

//Array Method 
//sometime we get APIs (in an array formate) (like this method)

[
    {},
    {},
    {}
]