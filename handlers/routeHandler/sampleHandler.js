/*
*Title : Sample Handler
*Description : Sample Handler
*/

//module scaffolding
const handler = {} ;


handler.sampleHandle = (requestProperties , callback) =>{
   console.log(requestProperties);
    callback (200 , {
        message : "Sample route found" ,
    })
} ;

module.exports = handler ;