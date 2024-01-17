const user = {
    username : "abcd",
    price : 299,
    welcomeMessage : function(){
        // console.log(`${this.username} welcome to Website`);
        // console.log(this);
    } // this option is used in current context to run for the current user // this run in constant environment 

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //this gives a empty space due to its run globally and nothing is define to retirn for "this"


// function chai(){
//     let username = "abfgh"
//     console.log(this.username);
// }
// chai() //this is not for the function it is only for the constant 

// const chai = function(){
//     let username = "uuefiuf"
//     console.log(this.username);
// }
// chai() // here is also gives undefined


// const chai = () => { // function replaced the arrow fuction 
//     let username = "uuefiuf"
//     console.log(this);
// }
// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addtwo(3,4));

// >>>>>>>>implicit return<<<<<<<<<<

// const addtwo = (num1, num2) =>  num1 + num2
// const addtwo = (num1, num2) =>  (num1 + num2)

// if we use {} this then we have to use return 
// if we use() then no need to use return 

// console.log(addtwo(3,4));

// >>>>>> Object return<<<<<<<
const addtwo = (num1, num2) =>  ({username: "dhdbjs"}) // for object return we need to use {} curly braces
console.log(addtwo(3,4));

