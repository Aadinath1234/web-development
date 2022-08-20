
// console.log("aur bhai ."); 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3009;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(` <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors & more designing</title>
      <style>
          .container{
              border:2px solid red;
              background-color:rgb(223,245,201);
              padding: 34px;
              margin:34px auto;
              width:666px;
         
  
          }
  
          a{
              text-decoration:none;
              color: black;
          } /*anchor tag */
  
          a:hover{
              color:rgb(247, 28, 39);
               background-color: rgb(216, 130, 16);
           }  /*on clicking on the box or moving your cursor on it , it color and background color will be changes.*/
          
          a:visited{
              background-color:rgb(197, 181, 181);
         }  /* when you have visited that link  then this properties will be shown.*/
  
         a:active{
            background-color: yellow;
         }  /* when the link is activated then this color is shown.*/
  
  
  
  
          .btn{
              font-family:'Times New Roman', Times, serif; /* to choose font type we use font-family. */
  
              font-weight: bold;/*this makes font bold */
  
              background-color: blue;
              padding:6px;
              border:none;
              cursor:pointer;
              font-size: 13px;
              border-radius: 4px;
  
          }  /* button properties */
  
          .btn:hover{
              color:darkgoldenrod;
              background-color: rgb(43, 189, 77);
              border: 2px solid black;
              /* when hover over button then you can see the border over there. */
  
          }
  
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aspernatur non, quas aliquid tempora pariatur deserunt deleniti harum, dolorum eveniet dignissimos magnam eligendi in enim voluptas quisquam porro, cumque quae eaque! Recusandae, ratione odit!</p>
          <a href="https://google.com" class="btn">Read more</a>
          <button class="btn"> Contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});