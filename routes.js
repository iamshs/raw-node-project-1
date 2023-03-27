/**
 * Title : routes
 * Description : Application routes
 */

//dependencies
const { sampleHandle } = require("./handlers/routeHandler/sampleHandler")
const { userHandler } = require("./handlers/routeHandler/userHandler")

const routes ={
    sample : sampleHandle ,
    user : userHandler ,
} ;

module.exports = routes ;