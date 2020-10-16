import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app=express();

dotenv.config();
//DB connection
connectDB();



app.get('/',(req,res)=>{
    res.send(`KAND........${process.env.TEST}`);
})



app.listen(process.env.PORT,console.log(`Server running on ${process.env.PORT}`.blue.inverse))


