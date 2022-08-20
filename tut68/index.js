/*const mod = require("./mod");
console.log(mod);
console.log("This is index.js");
*/ 






 // now here we are exporting this mod.js as a average so when you have to call the average function , we have to write average as a function in place of mod.
/*
 const average = require("./mod");
 console.log(average([3,4]));
 console.log("This is index.js");
output: 
This is module
3.5
This is index.js
*/ 







// here we are using mod.js as mod, here we are using its object and we have not named it for exporting , its name will be the same for exporting which is mod, so here we will use this as mod not average.
/*
const mod = require("./mod");
console.log(mod.avg([3,4]));
console.log("This is index.js")

 output:
This is module
3.5
This is index.js
output of both the programs are same , which is average and mod.
*/






//here we are using key value pair in function:
const mod = require("./mod");
console.log(mod.name);
console.log("This is index.js");
/* output:
This is module
Harry
This is index.js
*/ 






