const Task=require('../models/Task')
const mongoose=require('mongoose')

exports.createTask=async(req,res)=>{
    try{
        const title=req.body.title
        const description= req.body.description
        const status = req.body.status||"pending"
        const user=req.user.id


        const newTask = await Task.create({
            title,
            description,
            status,
            user
        })
        res.status(201).json({msg:'task created successfully'})
    } catch(error){
        res.status(500).send(error)
    }
}

exports.getTask=async(req,res)=>{
    try{
        const tasks=await Task.find({user:req.user.id})
        res.json(tasks)
    } catch(error){
        res.status(500).json(error)
    }
}
exports.getTaskById=async(req,res)=>{
    try{
        const foundTask=await Task.findOne({
                _id:new mongoose.Types.ObjectId(req.params.id),
                user:req.user.id
        })
        res.json(foundTask)
    } catch(error){
        res.json(error)
    }
}

exports.updateTask=async(req,res)=>{
    try{
        const updatedTask=await Task.findOneAndUpdate({
                _id:new mongoose.Types.ObjectId(req.params.id),
                user:req.user.id
            },
            {
                title:req.body.title,
                description:req.body.description,
                status:req.body.status
            },{new:true})
        if(!updatedTask){
            return res.json({msg:"No task exist"})
        }
        res.json(updatedTask)
    } catch(error){
        res.json(error)
    }
}

exports.deleteTask=async(req,res)=>{
    try{
        const deletedTask=await Task.findOneAndDelete({
            _id:new mongoose.Types.ObjectId(req.params.id),
            user:req.user.id
        })
        if(!deletedTask){
            return res.json({msg:"No task exist"})
        }
        res.json(deletedTask)
    } catch(error){
        res.json(error)
    }
}

exports.updateTaskPatch=async(req,res)=>{
    try{
        const updatedTask=await Task.findOneAndUpdate({
                _id:new mongoose.Types.ObjectId(req.params.id),
                user:req.user.id
            },
            req.body,
            {new:true})
        if(!updatedTask){
            return res.json({msg:"No task exist"})
        }
        res.json(updatedTask)
    } catch(error){
        res.json(error)
    }
}
//res->routes->controllers->response

//req->middleware->routes->controllers->response
