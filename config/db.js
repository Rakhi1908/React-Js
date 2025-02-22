const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/passport");

const db = mongoose.connection;

db.on("connection",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("data..");
    }
})