/*
 *Title : User Handler
 *Description : Handle user related routes.
 */

//module scaffolding
const handler = {};

handler.userHandle = (requestProperties, callback) => {
  const acceptedMethods = ["post", "get", "put", "delete"];
  if (acceptedMethods.indexOf(requestProperties.method) > -1) {
   handler._users[requestProperties.method](requestProperties,callback)
  } else {
    callback(405);
  }
};

handler._users = {} ;

handler._users.post= (requestProperties , callback) =>{

};

handler._users.get= (requestProperties , callback) =>{
callback(200) ;
};

handler._users.put= (requestProperties , callback) =>{

};

handler._users.delete= (requestProperties , callback) =>{

};

module.exports = handler;
