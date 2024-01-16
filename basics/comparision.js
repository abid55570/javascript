// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2 !=1);

// console.log("2">1);
// console.log("02">1);
// typescript rule 
// ***********Avoid below conversion*******
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// console.log(undefined==0);

// console.log(undefined>0);

// console.log(undefined<=0);

// ===

// console.log("2"===2);

// **** Data Type ****//

// Primitive data type & Non Primitive(or by Reference)
// Primitive ==>
// 7 Types : String, Number, boolean, null, Undefined, Symbol,BigInt


// const score = 100 
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const otherID = Symbol('123')

// //console.log(id===otherID); // not equal because symbol provide uniquesness

// const bigNumber = 587345736573560n

// // Non Primitive (Reference) : Array, Objects, Functions

// const heros = ["shaktiman", "juniorG"]
// let myObj = {
//     namee: "abcd",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Good Morning");
// }
// ******************************************************//

// stack memory => Primitive type use this memory : provides a copy  
// heap memory => non primitive : provide oroginal value or chanes in original values
let name1 = "abcd1234"
let name2 = name1
name2 = "mycode"

console.log(name1);
console.log(name2);

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}
let user2 = user1

user2.email = "abid@google.com"

console.log(user1);
console.log(user2);