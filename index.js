/**
 * Primary file for the API
 * 
 */

 //Dependencies 

 const http = require('http');
  const url = require('url');
 //The server should respond to all request with a string
const server = http.createServer(function(req, res){



//Get the URL and parse it
const parsedUrl = url.parse(req.url, true)
//Get The path
const path = parsedUrl.pathname;
const trimmedPath = path.replace(/^\/+|\/+$/g,'');

//Get the HTTP methode
const method = req.method
//Send the response 

res.end("hello world\n")

console.log('Request recieved at path:' + trimmedPath + 'with:' + method );
});

 //Start the server, and have it listen on 3000
 server.listen(3000, function(){
console.log("I am through")
 });

