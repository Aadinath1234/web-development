/*const fs = require("fs");
const text = fs.readFileSync("dele.txt", "utf-8");
console.log("The content of the file is :    ");
console.log(text);
*/
const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("browser", "Rohan");
console.log("The content of the file is :    ");
console.log(text);


console.log("Creating a new file...");
// to write in the file we use writeFileSync() :
fs.writeFileSync("rohan.txt", text);
// here rohan.txt is not exist which will be created and the second argument is the text which we inserting in the file.



