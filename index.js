/*
*Title: Uptime Monitoring Application
Description : A restful API to monitor up and down time of a user defined links 
*/

//dependencies

const http = require("http") ;

const url = require("url") ;

const {StringDecoder} = require("string_decoder")


// app object - module scaffolding

const app = {} ;

//configuration

app.config = {
    port : 5000 ,
} ;

//create-server

app.createServer = () =>{

  const server = http.createServer(app.handleReqRes) ;
  server.listen(app.config.port , () =>{
    console.log(`Listening on port ${app.config.port}`);
  }) ;

} ;


//handle Response

app.handleReqRes = (req , res) =>{
 // request handle
 //get the url and parse it
 const parsedUrl = url.parse(req.url , true) ;
 const path = parsedUrl.pathname ;
 const trimmedPath = path.replace(/^\/+|\/+$/g, '') ;
 const method = req.method.toLowerCase() ;
 const queryStringObject = parsedUrl.query ;
 const headersObject = req.headers ;


const decoder = new StringDecoder("utf-8") ;
let realData = "" ;

req.on("data" , (buffer) =>{
 realData += decoder.write(buffer) ;
})

req.on("end" , () =>{
  realData += decoder.end() ;
  console.log(realData);
  //response handle
  res.end("Hello World") ;
})

  
}

//start the server

app.createServer() ;