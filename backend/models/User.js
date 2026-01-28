const mongoose=require('mongoose')


const userSchema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        requried:true,
        unique:true
    },
    password:{
        type:String,
        requried:true
    }
})
module.exports=mongoose.model('Users',userSchema)