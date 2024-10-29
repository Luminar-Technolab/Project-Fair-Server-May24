const mongoose = require('mongoose')

const dbConnection = process.env.CONNECTION_STRING

mongoose.connect(dbConnection).then(res=>{
    console.log("MongoDb Atlas connected successfully with PFServer");    
}).catch(err=>{
    console.log("Connection failed");
    console.log(err);    
})