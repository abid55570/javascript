// const tinderUser = new Object() //singleton object (both are empty object)
const tinderUser={}  // non singleton object basic (empty object )

tinderUser.id = "123abc"
tinderUser.name = "jammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "you@gmail.com",
    fullname: {
        userfullname: {
            firstname:"dear",
            lastname:"near"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

// when response come from API then we use ? if the variable is not available 

const obj1 ={1: "a",2:"b"}
const obj2 = {3: "c", 4: "d"}
// const obj2 = {3: "c", 4: "d"} while using same vale it provides unique value only in the new object

const obj4 = {5: "e", 6: "f"}

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);
// const obj3 = Object.assign({}, obj1,obj2,obj4) 
//empty brcket defines that all the object element gathered in the target empty cell "{}", otherwise if we not define this empty cell then it will merge in the obj1 as a targeted object 

const obj3 = {...obj1,...obj2} // will use this properly to add the values
// console.log(obj3);

// data received from database 
const users = [
    {
        id:1,
        email: "abcd@gmail.com"
    },
    {
        id:2,
        email: "bghj@google.com"
    },
    {
        id:3,
        email: "bgkhvkdj@google.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // IMPortant 
console.log(Object.values(tinderUser)); // IMPOrtant
console.log(Object.entries(tinderUser)); // Important 

console.log(tinderUser.hasOwnProperty('isLogged'));// he we cross check or ask thet tinder user has this property or not because if user has no property like this then do not find the values or entries otherwise prog will crash


//*******************************************//
// rest i need to learn from 
// inspect page>>>> console >>>> type object >>> get the properties 

//  DESTRUCTURING >>>>>>>>>>>>>

const course = {
    coursename: "javascript",
    price : "456",
    courseValue: "java"
}

//course.courseValue // this make it very complex for each extraction 

const {courseValue : Value} = course
// above we put the constant for a variable to get from "course" and what the value we want >> put it in curly brackets 
// here -- :Value is the destructuring by which i can use the other variable (DESTRUCTURING PROCESS) which gives same value 

console.log(Value);


// this is in react 
// const navbar = (props.comapny ) => {
//     // but we use curly bracket and destructure this in react such as  
//     const navbar = ({comapny} ) => {


// }

// navbar(company = "barter")

// to know about API nature - visit json API formatter 
// randomuser.me >>>> generate randon api for study purpose