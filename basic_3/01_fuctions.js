// console.log("a");
// console.log("b");
// console.log("c");
// console.log("d");
// console.log("e");
// console.log("f");


function alphabet(){
    console.log("a");
    console.log("c");
    console.log("d");
    console.log("e");
    console.log("f");
    console.log("b");
}
// alphabet()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2); 
// }

// addTwoNumbers(3,4)
// // addTwoNumbers(3,"a")
// const result = addTwoNumbers(3,5)
// console.log("Result:", result);

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
}

// addTwoNumbers(3,4)
// addTwoNumbers(3,"a")
const result = addTwoNumbers(3,5)
console.log("Result:", result);


function loginUserMessage(username= "saaa"){
    if(username===undefined){ // we can use {!username} both are same 
        console.log("Please enter a user name");
        return 
    }
    return `${username} just logged in` // here $ sign indicated the variable values in the bracket 

}
console.log(loginUserMessage("lkjhh"))

// if someone do not put any value this will give undefined 
// if we dont want to anyone cant pust blank then we can define the value of username or pass any value then it will be overwrite 