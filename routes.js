/**
 * Title : routes
 * Description : Application routes
 */

//dependencies
const { sampleHandle } = require("./handlers/routeHandler/sampleHandler")
const { userHandle } = require("./handlers/routeHandler/userHandler")

const routes ={
    sample : sampleHandle ,
    user : userHandle ,
} ;

module.exports = routes ;