//Arrays

const myArray = [1,1,2,3,4, "abcd"]
// const array2 = ["dg", "gjhk"]

// const array3 = (2,4,6,8)
// console.log(myArray[0]);

// array methods 

// myArray.push(6)
// myArray.pop()
// myArray.unshift(9)
// myArray.shift()

// const newarray = myArray.join()
// console.log(typeof myArray);

//slice splice ********************************

// const myn1 = myArray.slice(1,3) //1,3 is range of elements
// console.log(myn1)
// console.log("B", myArray);

// const myn2 = myArray.splice(1,3) // 1,3 last range print 
// console.log("C", myArray);
// console.log(myn2);
// in splice last range include and in slice last range not taken

// ************** //*****************//

const marvel_heros = ["thor","ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// it works like python adding list in list with "PUSH" 
// same we can do with the "concat" lets try this one too 

marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// result is same (Push & Cocat)
// console.log(marvel_heros[3][2]);

all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...dc_heros, ...marvel_heros]
// console.log(all_new_heros);

const arr = [1,2,3,[4,5,6,[7,8]]]
const mergearray = arr.flat(Infinity)
// console.log(mergearray);

console.log(Array.isArray("abid")); // it is not an array so o/p is false 
console.log(Array.from("abid")); // it convert it into an array with slicing 

console.log(Array.from({name:"abid"})); // it gives empty array we need to provide which key he has to be convert in array 

// lets take another example 

let s1 = 100
let s2 = 200
let s3 = 300 

console.log(Array.of(s1,s2,s3));

// is arrary // of array // from