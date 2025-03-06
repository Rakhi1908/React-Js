const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Category')

const db=mongoose.connection

db.on('connected', (err,data)=>{
    if(err){
        console.log(err)
    }
    else {
        console.log('Database Connected....')
    } 
}) 