import mongoose from 'mongoose';



const foodSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    fooditem:{
        type:String,
        required:true
    },
    calories:{
        type:Number,
        default:0
    },
    quantity:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
})



const Food=mongoose.model('Food',foodSchema);
export default Food;