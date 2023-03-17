/*
*Title: data file
Description : write read all the data 
*/

//dependencies

const fs = require("fs") ;
const path = require("path") ;

//module scaffolding

const lib = {} ;

//base directory of the data file

lib.basedir = path.join(__dirname + "/../.data/") ;

//write data to file

lib.create = function(dir , file , data , callback) {

//open file for writing

fs.open(`${lib.basedir+dir}/${file}.json`,"wx" , (err , fileDescriptor) => {
  if(!err && fileDescriptor){

    //convert data to string
    const stringData = JSON.stringify(data) ;

    //write data to file then close it.
    fs.writeFile(fileDescriptor , stringData , (err2) =>{
        if(!err2){
        fs.close(fileDescriptor , (err3) =>{
           if(!err3){
             callback(false) ;
           }else{
            callback("error closing the new file!") ;
           }
        })
        }else{
            callback("writing file error!") ;
        }
    })

  }else{
    callback("Couldn't create new file,It may already exists!") ;
  }
})

} ;

module.exports = lib ;