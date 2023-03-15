/*
*Title: Uptime Monitoring Application
Description : A restful API to monitor up and down time of a user defined links 
*/

//dependencies
const {handleReqRes} = require("./helpers/handleReqRes") ;
const http = require("http") ;


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

app.handleReqRes = handleReqRes ;
//started the server

app.createServer() ;