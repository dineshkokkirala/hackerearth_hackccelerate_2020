import express from 'express'
import mongoose from 'mongoose'
import User from '../models/userModel.js'
import {validationResult,check} from "express-validator";
import bcrypt from "bcryptjs"

const router = express.Router();
router.post("/register",[
    check("username","Enter your username").exists(),
    check("email","Email must be a valid email").isEmail()
],async(req,res)=>{

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

    try {
        
        const data={
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        }

        let user = await User.findOne({email:data.email});

        if(user){
            return res.status(400).json({"msg":"Email is already exists"})
        }
         
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password,salt);
        user = new User(data);
       
        await user.save();
        return res.status(200).json({"msg":"Registered Successfully"})


    } catch (err) {
        console.log(err.message);
        return res.status(500).json({"msg":"Internal Server Error"});
    }
})

export default router