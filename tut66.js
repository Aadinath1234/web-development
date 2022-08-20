//here we are creating server and serving the files as per requirement of the users.
const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('#61 Math Object In JavaScript.html');


// to creating a server:
const server = http.createServer((req, res)=>{
//here req is for request and res for response.
res.writeHead(200,{'Content-type': 'text/html'});
//here in the header insert the text html.and response code is 200.

// to serve the content
res.end(fileContent)
})
//here the creation of the server completed.


// and we want to listen server on which port:
server.listen(80, '127.0.0.1', ()=>{
    // here port is 80 and local host is '127.0.0.1' and then we have callback.
    // so here if you choose port other than 80 then while executing it you have to mention the port number with the local host.like:
    // 127.0.0.1: port no. , if you choose port 8000 then simply write  127.0.0.1:8000 if you don't do that then the page will not get loaded.
console.log("Listening on port 80");
})








