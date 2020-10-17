import mongoose from 'mongoose'


const profileSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    age:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    height:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    fitnessgoals:{
        type:[String],
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
})

const Profile=mongoose.model('Profile',profileSchema);
export default Profile;