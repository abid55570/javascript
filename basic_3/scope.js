
// {} this is known as scope 
// var c = 300 // global scope 
let a = 300 

if (true) {   // in the if block scope
    let a =10
    const b =  20
    // console.log("inner:", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "abcd"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()

}
// one()

if (true) {
    const username= "acccdd"
    if (username==="acccdd") {
        const website = "youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

// **********************************************//
console.log(addone(5));
function addone(num){
    return num +1  
}
// in the above syntax before initialize it can run if we write direct function 

addtwo(5) // it throws error because in this context it not initialize if const function then it must be initialize then run the prog. 
const addtwo = function(num){
    return num +2
}
