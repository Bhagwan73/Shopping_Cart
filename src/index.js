const express= require('express')
const mongoose=require('mongoose')
const route=require('./route/route')
const multer=require('multer')
require("dotenv").config({path:".env"})

const app=express()
app.use(express.json())
app.use(multer().any())
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL , {useNewUrlParser:true})
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log(err))
let PORT = process.env.PORT || 3000 
app.listen(PORT, ()=>{
    console.log(`Connected on Port ${PORT}`)
})

app.use('/',route)
