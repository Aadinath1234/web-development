// Synchronous or blocking.: execution will be continous and line by line.
// Asynchronous or non-blocking.: line by line execution not guaranteed , callbacks will fire.


const fs = require("fs");
let text = fs.readFile("dele.txt", "utf-8", (err,data)=>{
    console.log(err,data);
    // err=error
    // date =  (err, data) is callbackdata and readfile contain path of file and callbackdata.

});
console.log("This is a message");

/* output of this whole file: This is a message
null Writing in browser js and developer console. */

/* so here in readFile first it reads the dele.txt file and when the work is done 
  of reading the file completely then it will callback the function 
   (err,data) and read the file is going on , so another work of printing the console
    here which is console.log("This is a message") will be 
      get printed before the (err,data).
     #  this is asynchronous mode or non-blocking code.
     # the execution is happening line by line but it appears like it 
       is executing the code randomly.
       #node.js follows asynchronous mode.
       
        */


