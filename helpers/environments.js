/*
*Title: environments
Description : handle all the environments
*/

//dependencies

//module scaffolding

const environments = {} ;


environments.staging = {
 port : 3000 ,
 envName : "staging" ,

} ;

environments.production = {
    port : 5000 ,
    envName : "production" ,
} ;

//determine which environments was passed

const currentEnvironments = typeof(process.env.NODE_ENV) === "string" ? process.env.NODE_ENV : "staging" ;

//export corresponding environment object

const environmentToExport = typeof(environments[currentEnvironments])
 === "object" ? environments[currentEnvironments] : environments.staging ;

 //export module

 module.exports = environmentToExport ;