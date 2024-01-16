const name = "abid"
const repoCount = 50
// console.log(name + repoCount + "value");

// we will not use this
// we use f string like python as eg. 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('abcd')

console.log(gameName[3]); // it is like slicing of python 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0,3)
console.log(newString);

// same as python slicing works 

const url = "https://google.com/home%20work"
// url.replace('%20','-')
// console.log(url.replace('%20', '-'));
console.log(url.includes('%20')); //shows the elements present in the url or not output will be in boolean 

