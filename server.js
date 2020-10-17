import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";

const app=express();

dotenv.config();
//DB connection
connectDB();

app.use(express.json());
app.use("/api/user/",userRoutes);
app.use("/api/task/",taskRoutes);
app.use("/api/food/",foodRoutes);


app.get('/',(req,res)=>{
    res.send(`KAND........`);
})



app.listen(process.env.PORT,console.log(`Server running on ${process.env.PORT}`.blue.inverse))


