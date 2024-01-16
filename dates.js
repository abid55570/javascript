// let myDate = new Date()
// console.log(myDate);

// let myDate = new Date()
// console.log(myDate.toString());

// let myDate = new Date()
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,8,9)
// console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    year: "2-digit"
})
console.log(newDate.toLocaleString());