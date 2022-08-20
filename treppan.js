console.log("this is tutorial 53");

let name = 'Harry';
let name1 = 'Shubham';
let name2 = 'Rohan';
let name3 = "sagar";
console.log(name + "  is a good boy");
console.log(name1 + "  is a good boy");
console.log(name2 + "  is a good boy");
console.log(name3 + "  is a good boy");
/* output: 
   Harry  is a good boy
 Shubham  is a good boy
 Rohan  is a good boy
 sagar  is a good boy

 */



 /* to perform the same task many times , so we create
  functions where wrap all tasks which we will use many times
  in our program.
  */
  /*
function greet(name){
    console.log(name + "is a good boy");
  }
greet(name);
greet(name1);
greet(name2);
greet(name3);
 Harryis a good boy
 Shubhamis a good boy
 Rohanis a good boy
 sagaris a good boy
 here function is keyword before the 
  function name , greet is function name,
  name is the variable which is in place of parameter. */
  let greetText= "good morning";
  function greet(name, greetText){
    //let name1="Name1"; this is just at local scope its existance is nothing 
     // out of this scope.and there will be no change in the value of name which is declared out of this function.
    console.log(greetText + "  " + name);
    console.log(name + "is a good boy");

  }

greet(name,greetText);//this is called function call.
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);

/*output: good morning  Harry
 Harryis a good boy
 good morning  Shubham
 Shubhamis a good boy
 good morning  Rohan
 Rohanis a good boy
 good morning  sagar
 sagaris a good boy */


 function greet1(name, greetText1="Greetings from Javascript"){
   
    console.log( greetText1+ "" + name);
    console.log(name+ "is a good boy");

 }
 let greetText1 = "thank you very much";
 greet1(name,greetText1);
 greet1(name);//here it will take default value of greetText1.
 /*output:
 thank you very muchHarry
 Harryis a good boy
 Greetings from JavascriptHarry
 Harryis a good boy
 */


 function sum(a,b,c){
    let d = a + b + c;
    return d;
  //console.log("this will not get executed.")
 }
 let returnVal = sum(1,2,3);
 console.log(returnVal); //output: 6.
 /* after return if you write more code then 
   this code will not get executed.at return code execution 
     ends.after that code will not be considered. */



