const express = require('express')
const app=express()
const mongoose = require('mongoose')
const dotenv=require('dotenv')
const cors = require('cors')
dotenv.config()
app.use(cors())
app.use(express.json())
mongoose.connect(
    process.env.MONGO_URI
).then(()=>{
console.log("MongoDB connected successfully");
}).catch((err)=>{console.log(err)})

app.use('/auth',require('./routes/authroutes'))
app.use('/task',require('./routes/taskRoutes'))
app.get('/api',(req,res)=>{
    res.send('Hi!! From express')
})
app.post('/api',(req,res)=>{
const temp=req.body;
res.send(temp);
})
app.listen(4000,()=>{
    console.log("server running on 4000")
});