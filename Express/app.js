// npm install express.
// express is a webapplication framework for nodejs.
// express simplify web development.
// express gives routing and scalability.and it is free and open-source.
const express = require("express"); // here installed module imported 
 //  this lines include in only #72
const path = require("path");
const app = express(); // creating an app
const port = 80;// here i am saying , i want to run my app on port 80.


// this lines are including in #72 tutorial :
// this is used For Serving static files: 
app.use('/static', express.static('static'))  // here the last static is the name of the folder.
//  here in app.use , first static is url and third static is folder.
// here we will install pug using npm.(npm install pug.)
//set the template engine as pug so we include these lines
app.set('view engine', 'pug')
// set the views  directory:
app.set('views', path.join(__dirname, 'views'))
// dirname is for directory name  and we will get views folder .
// Our pug demo endpoint:
app.get("/demo", (req, res)=>{
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
});










app.get("/", (req, res)=>{
    /* here we are saying that when anyone in / of app 
     then callback will be run , function will be run.
      this is an arrow function which will take 2 arguments
      (req, res)

      */ 
    //  res.send("This is my first express app with Harry ")
    // res.send("This is homepage of my first  express app with Harry ");


    // when you want to send json and status code with it then use this response:
    res.status(200).send("This is homepage of my first express app with Harry");



     
}); // i want to handle my get request at / endpoint.

app.get("/about", (req, res)=>{
    res.send("this is about page of my first express app with Harry");
});
// app.get hits the get request 
// i want to handle get request at /about end point.



app.post("/about", (req, res)=>{
    res.send("this is a post request about page of my first express app with Harry");
});
// app.post hits the post request.
// i want to handle post request at /about end point.



// when you want to show status code 404 not found then use this response: 
app.get("/this", (req, res)=>{
    res.status(404).send("this page is not found.");
}); // when someone goes to /this then they will get an error of 404 page not found.





app.listen(port, ()=>{
    // port is for on which port you want to listen.
    // and second is a callback.
    console.log(`The application started successfully on port ${port}`)
});
// to listen the port you have to use this.

