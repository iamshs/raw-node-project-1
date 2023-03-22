/*
*Title: Uptime Monitoring Application
Description : A restful API to monitor up and down time of a user defined links 
*/

//dependencies
const {handleReqRes} = require("./helpers/handleReqRes") ;
const http = require("http") ;
const env = require("./helpers/environments") ;
const data = require("./lib/data")


// app object - module scaffolding

const app = {} ;



//create-server

app.createServer = () =>{

  const server = http.createServer(app.handleReqRes) ;
  server.listen(env.port , () =>{
    console.log(`Listening on port ${env.port}`);
  }) ;

} ;


//handle Response

app.handleReqRes = handleReqRes ;
//started the server

app.createServer() ;