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
console.log(marvel_heros);
// it works like python adding list in list with "PUSH" 
// same we can do with the "concat" lets try this one too 

marvel_heros.concat(dc_heros)
console.log(marvel_heros);
// result is same 