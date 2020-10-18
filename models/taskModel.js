import mongoose from 'mongoose'

const TaskSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    taskname:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    duedate:{
        type:Date,
        //default:Date.now
    },
    duration:{
        type:Number,
        required:true
    },
    description:{
        type:String
    },
    markascomplete:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now
    }

},{
    timestamps:true
})

const Task=mongoose.model("Task",TaskSchema);

export default Task;