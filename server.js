import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app=express();

dotenv.config();
//DB connection
connectDB();

app.use(express.json());
app.use("/api/user/",userRoutes);


app.get('/',(req,res)=>{
    res.send(`KAND........`);
})



app.listen(process.env.PORT,console.log(`Server running on ${process.env.PORT}`.blue.inverse))


