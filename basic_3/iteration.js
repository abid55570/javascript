// for 

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if (element==5){
//         console.log("5 is the number");
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value : ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i+ '*' + j + ' = ' + i*j);     
//     }
// }

// let index = 0 
// while (index<=10){
//     console.log(`value of index is ${index}`);
//     index= index+2
// }


const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// map >>>>>>>>>>>>>>>>>>>>>>>

// foreach >>> fetching the data from databases
// const coding = ["js", "ruby", "java", "python", "react"]

// coding.forEach( (item) => {
//     console.log(item);
// })

// const mycoding = [
//     {
//         languageName : "java",
//         languageFileName: "js"
//     },
//     {
//         languageName : "python",
//         languageFileName: "py"
//     },
//     {
//         languageName : "react",
//         languageFileName: ".js"
//     },
//     {
//         languageName : "c",
//         languageFileName: "c"
//     },
//     {
//         languageName : "text",
//         languageFileName: "txt"
//     }
// ]

// mycoding.forEach( (item) => {
//     console.log(item.languageName);
// })

// const coding = ["js", "ruby", "java", "python", "react"]

// const values = coding.forEach((item) =>{
//     console.log(item);
//     return item
// })
// console.log(values); // this do not return values || undefined


// const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = mynums.filter((num)=>num>4)
// console.log(newNums);

// const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = mynums.filter((num)=>  {
//     return num>4}) //if we use scope then use return then it will give value

// console.log(newNums);
const myNums = [1,2,3,4,5,6,7,8,9,10]


const newNums = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
});
console.log(newNums);