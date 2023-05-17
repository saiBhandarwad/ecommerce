require('dotenv').config()
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const server = express()
server.use(cors())
server.use(express.json())//body parser middleware
//connection to mongodb
async function main(){
    await mongoose.connect(process.env.MONGO_URL)
    console.log('database connected');
    // await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    
}
main().catch(err=>console.log(err));

//routes
server.use(express.static(process.env.PUBLIC_DIR))
server.use('/api',productRouter)
server.use('/api',userRouter)
server.use('/sell',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"build","index.html"))
})
server.use('/*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"build","notFound.html"))
})
console.log('env',process.env.MONGO_URL,process.env.PORT);
server.listen(process.env.PORT,()=>{
    console.log('server started');
})

