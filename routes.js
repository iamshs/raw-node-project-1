/**
 * Title : routes
 * Description : Application routes
 */

//dependencies
const { sampleHandle } = require("./handlers/routeHandler/sampleHandler")

const routes ={
    sample : sampleHandle ,
} ;

module.exports = routes ;