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

//read data to file

lib.read = (dir,file,callback) =>{
  fs.readFile(`${lib.basedir+dir}/${file}.json`, "utf8" ,(err,data) =>{
    console.log( err , data);
  })
} ;

//update existing file

lib.update = (dir , file , data , callback) =>{
  //open file for writing
  fs.open(`${lib.basedir+dir}/${file}.json`,"r+" , (err1 , fileDescriptor) =>{
    if(!err1 && fileDescriptor){
      //convert data to string
      const stringData = JSON.stringify(data) ;
      
      //truncate the file
      fs.ftruncate(fileDescriptor , (err2) =>{
        if(!err2){
          //write to file and close it
          fs.writeFile(fileDescriptor,stringData,(err) =>{
           if(!err){
             //close the file
             fs.close(fileDescriptor,(err3)=>{
               if(!err3){
                   callback(false) ;
               }else{
                callback("Error closing file!!")
               }
             })
           }else{
            callback("Error closing file!!") ;
           }
          })
        }else{
          callback("Can't truncate file!")
        }
      })
    }else{
      console.log("Can't update.File may not be exists!!");
    }
  })
}

//delete existing file

lib.delete = (dir , file , callback) =>{
  //unlink file
  fs.unlink(`${lib.basedir+dir}/${file}.json` , (err) =>{
    if(!err){
      callback(false)
    }else{
      callback(`Error deleting file!!`)
    }
  })
}

module.exports = lib ;