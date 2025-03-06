const express = require('express');

const app=express()
const db=require('./config/db');
const router = require('./Routes/productRoutes');
const P_router = require('./Routes/productRoutes');
const C_router = require('./Routes/categoryRoutes');

app.use(express.urlencoded())
app.use(express.json())    
app.use("/user",router)
app.use("/product",P_router)
app.use("/category",C_router)

app.listen(9090,()=>{
    console.log('Server is Running http://localhost:9090....')
});