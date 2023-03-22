/*
*Title: utility
Description : important utility related function.
*/

//dependencies
const crypto = require("crypto");
//module scaffolding

const utilities = {};

//parse string to json

utilities.parseJson = (jsonString) => {
  let output;

  try {
    output = JSON.parse(jsonString);
  } catch {
    output = {};
  }
};

//hashing

utilities.hash = (str) => {
  if (typeof str === "string" && str.length > 0) {
    const hash = crypto
      .createHmac("sha256", "jcnascnsdnfnJCNWDFKWNF")
      .update(str)
      .digest("hex");

      return hash ;
  }else{
   return false ;
  }
};

//export module

module.exports = utilities;
