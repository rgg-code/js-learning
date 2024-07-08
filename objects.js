// singleton 
// object.create

// obj literals
// const MySym = Symbol("key1")
// const JsUser = {
//     name: "ram",
//     [MySym] : "mykey1",
//     age: 26,
//     address: "dfff"
// }

// console.log(JsUser)

// console.log(typeof JsUser[MySym])

// console.log(JsUser);

// ***************************************************************

// const tinderUser = new Object() // singleton object 
// const tinderUser = {}

// tinderUser.id= "123abh"
// tinderUser.name = "sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser)

// const regularUser = {
//     email: "gopalgmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "ram",
//             lastname: "gopal"
//         }
//     }
// } 

// console.log(regularUser.fullname.userfullname.firstname);


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// const obj3 = {5: "e", 6: "f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

// const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4)

// const users = [

//     { 
//      id: 1,
//      email: "h@gmail.com"
//     },
//     { 
//      id: 2,
//      email: "h@gmail.com"
//     },
//     { 
//      id: 3,
//      email: "h@gmail.com"
//     },
//     { 
//      id: 4,
//      email: "h@gmail.com"
//     }
// ]

// users[1].email

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

//destructuring 

// const course = {
//     coursename: "hindi",
//     price: 200,
//     courseInstructor: "hitesh"
// }

// console.log(Object.values(course));

// const {courseInstructor : abs } = course

// console.log(abs);

// ************************************************************

