console.log("This is module");
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;

}
//here we are exporting the mod as function by using average function name.
// module.exports = average;
// when we have not written this at that time this function is not get printed on the screen.:
/* output: This is module
{}
This is index.js
*/
/* after writing this we got it on output terminal: this is module
[Function: average]
This is index.js
*/ 

// now here we are exporting this mod.js as a average so when you have to call the average function ,  we have to write average as a function in place of mod.










// here we are exporting the module as object:
/*
module.exports = {
    avg: average,
    name: "Harry",
    repo: "GitHub"
}
*/  








// when you want to export only one key value then you can use this:
module.exports.name = "Harry";