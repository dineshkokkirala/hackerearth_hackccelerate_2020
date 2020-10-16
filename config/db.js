import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useCreateIndex:true,
            useNewUrlParser:true
        })
        console.log("MongoDB Connected".yellow.bold.underline);
    } catch (err) {
        console.log(`Error : ${err.message}`.red.underline.bold);
        process.exit(1);
    }
}

export default connectDB;