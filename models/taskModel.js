import mongoose from 'mongoose'

const TaskSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    taskName:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    duedate:{
        type:Date,
        required:true,
        default:Date.now
    },
    description:{
        type:String
    },
    markascomplete:{
        type:Boolean,
        default:false
    }

},{
    timestamps:true
})

const Task=mongoose.model("Task",TaskSchema);

export default Task;