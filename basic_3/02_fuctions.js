// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(2))

// suppose cx will add many items then we use REST (... is rest operator)

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(100,500,300,700))

// function calculateCartPrice(val1, val2,  ...num1){
//     return num1
// }
// // here val1 & val2 will take 1st & 2nd price and rest will show in num1
// console.log(calculateCartPrice(100,500,300,700))

const user = {
    username:"abcd",
    prices: 299
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user) or we can use 
handleObject({
    username: "sam",
    price: 300
})

const myNewArray = [200,300,400,500]

function returnsecondvalue(getArray){
    return getArray[1]
}
// console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue([200,50,300,400,500]));


// >>>>>>>>Function Scope <<<<<
// >>>>>>>>Global Scope<<<<<

