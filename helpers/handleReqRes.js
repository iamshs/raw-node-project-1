/*
*Title: handle Req res
Description : handle Req Res 
*/

//dependencies

const url = require("url") ;
const {StringDecoder} = require("string_decoder") ;
const routes = require("../routes") ;
const {notFoundHandle} = require("../handlers/routeHandler/notFoundHandler") ;

// module scaffolding
const handler = {} ;

handler.handleReqRes =(req , res) =>{
    // request handle
    //get the url and parse it
    const parsedUrl = url.parse(req.url , true) ;
    const path = parsedUrl.pathname ;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '') ;
    const method = req.method.toLowerCase() ;
    const queryStringObject = parsedUrl.query ;
    const headersObject = req.headers ;
   
    const requestProperties = {
        parsedUrl ,
        path ,
        trimmedPath ,
        method ,
        queryStringObject ,
        headersObject ,
    }
   
   const decoder = new StringDecoder("utf-8") ;
   let realData = "" ;

   const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandle ;
   chosenHandler(requestProperties , (statusCode , payload) =>{
     statusCode = typeof(statusCode) === "number" ? statusCode : 500 ;
     payload = typeof(payload) === "object" ? payload : {} ;

     const payloadString = JSON.stringify(payload) ;

     //return the final response
     res.writeHead(statusCode) ;
     res.end(payloadString) ;
   })
   
   req.on("data" , (buffer) =>{
    realData += decoder.write(buffer) ;
   })
   
   req.on("end" , () =>{
     realData += decoder.end() ;
     console.log(realData);
     //response handle
     res.end("Hello World") ;
   })
   } ;


module.exports = handler ;