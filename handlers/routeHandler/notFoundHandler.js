/*
*Title : NotFound Handler
*Description : 404 not Found Handler
*/

//module scaffolding
const handler = {} ;


handler.notFoundHandle = (requestProperties , callback) =>{
 callback(404 , {
    message : "requested route is not found"
 })
} ;

module.exports = handler ;