import mongoose from "mongoose";
import Task from "../models/taskModel.js";
import express from "express";
import {validationResult,check} from "express-validator";
import auth from "../middleware/auth.js";

const router = express.Router();

// Add task
// POST /api/task/
// Access Private
router.post("/",[auth,[
    check("taskname","Enter your TaskName").not().isEmpty(),
    check("category","Please select your category").not().isEmpty(),
]],async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {taskname,category,duedate,duration,description,markascomplete} =req.body;
    try {
        let user_task = new Task({user:req.user._id,taskname,
            category,
            duedate,
            duration,description,markascomplete}) 
        await user_task.save();
        //console.log(user_task)
        res.json(user_task);
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({"msg":"Internal Server Error"});
    }

})


//Get all CURRENT tasks of own user
// GET /api/task/all
// Access Private

router.get("/current_tasks",auth,async(req,res)=>{
    try {
        const all_tasks = await Task.find({user:req.user._id,markascomplete:false}).sort({date:-1});
        res.json(all_tasks);
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({"msg":"Internal Server Error"});
    }
})



//Get all COMPLETED tasks of own user
// GET /api/task/all
// Access Private

router.get("/completed_tasks",auth,async(req,res)=>{
    try {
        const all_tasks = await Task.find({user:req.user._id,markascomplete:true}).sort({date:-1});
        if(all_tasks!==null)
            return res.json(all_tasks);
        return res.json({"msg":"No tasks are completed"})
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({"msg":"Internal Server Error"});
    }
})


// delete your own task
// DELETE /api/task/:id

router.delete("/:id",auth,async(req,res)=>{
    try {
         await Task.findByIdAndRemove({_id:req.params.id});
        res.json({"msg":"Deleted Successfully"});
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({"msg":"Internal Server Error"});
    }
})





export default router;