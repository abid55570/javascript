// singleton 

//object literals 
// Object.create // contructure method ke thru(in this singleton object)

const mysym = Symbol("key1")


const jsUser = {
    name: "hitesh",
    "full name" : "abcd efgh",
    [mysym] : "mykey1", // using square bracker it treat as symbol 
    age : 18,
    location : "jaipur",
    email: "abcd@gmail.com",
    isloggedin : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser.mysym); //this throws as a string not symbol 
// to use as a symbol need to write correct syntax 
// console.log(jsUser[mysym]);

jsUser.email = "dfgh@google.com"  //to change the value 
// Object.freeze(jsUser) // to free the object till above 
jsUser.email = "dfgh@yahoo.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Good morning");
}
jsUser.greeting2 = function(){
    console.log(`warm morning, ${this.name}`);
}

    console.log(jsUser.greeting());
    console.log(jsUser.greeting2());
