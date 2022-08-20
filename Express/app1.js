const express = require("express");
const fs = require("fs");
const path = require("path")
// this file is for #73 and #74.
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF:
app.use('/static', express.static('static')) //For serving static files.
// to bring the form data we will use this.
app.use(express.urlencoded())


// PUG SPECIFIC STUFF:
 app.set('view engine', 'pug') //Set the template engine as pug
 app.set('views', path.join(__dirname, 'views')) //Set the views directory



//  ENDPOINTS:
app.get('/', (req, res)=>{
    // when you have to use variables and want to send text to the webpage  then you can use like params:
    const con = "this is the best content on the internet so far so use it wisely"
    const params = {'title': 'Pubg is the best game', "content" : con}

    res.status(200).render('index.pug', params);
})
// in place of send we will use render because we are using templates.

app.post('/', (req, res)=>{
    //  console.log(req.body); // this is to print the requested data.
    name = req.body.name 
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender},  residing at ${address}. More about him/her: ${more} `

    // to add in output.txt file.
    fs.writeFileSync('output.txt', outputToWrite )
    const params = {'message': 'Your form has been submitted successfully'}
   res.status(200).render('index.pug', params);

})



// START THE SERVER:
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
