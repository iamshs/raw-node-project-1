/*
*Title: handle Req res
Description : handle Req Res 
*/

//dependencies

const url = require("url") ;
const {StringDecoder} = require("string_decoder") ;
const routes = require("../routes") ;
const {notFoundHandle} = require("../handlers/routeHandler/notFoundHandler") ;
const {parseJson} = require("../helpers/utilities") ;

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
   
   req.on("data" , (buffer) =>{
    realData += decoder.write(buffer) ;
   })
   
   req.on("end" , () =>{
     realData += decoder.end() ;
     requestProperties.realData = parseJson(realData) ;


    
     chosenHandler(requestProperties , (statusCode , payload) =>{
       statusCode = typeof(statusCode) === "number" ? statusCode : 500 ;
       payload = typeof(payload) === "object" ? payload : {} ;
  
       const payloadString = JSON.stringify(payload) ;
  
       //return the final response
       res.setHeader("Content-type" , "application/json")
       res.writeHead(statusCode) ;
       res.end(payloadString) ;
     }) ;
      }) ;
   } ;


module.exports = handler ;