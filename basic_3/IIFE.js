// >>>>>>>>Immediately Inviked Function Expression<<<<<<< IIFE

//  used in database connection functions 
// global scope se function me koi intrupption nhi hona chaiye 

(function hai(){
    console.log(`DB Connnected`);

})()


// ()()
// first bracket is for function and 2nd is execution call 

// this is also written as arrow 

( () =>  {
    console.log(`DB CONNECTED`);
} )();
