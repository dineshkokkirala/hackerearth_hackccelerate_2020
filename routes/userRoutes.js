import express from 'express'
import mongoose from 'mongoose'
import User from '../models/userModel.js'
import {validationResult,check} from "express-validator";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import auth from '../middleware/auth.js'
import Profile from '../models/profileModel.js'
const router = express.Router();


//Register  route
// POST     /api/user/register
// access   Public
router.post("/register",[
    check("username","Enter your username").not().isEmpty(),
    check("email","Email must be a valid email").isEmail(),
    check("password","Password must be 6 characters").isLength({min:6})
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
        //return res.status(200).json({"msg":"Registered Successfully"})
        const payload = {
            user:{
                id:user._id,
                username:user.username
            }
        }

        jwt.sign(payload,process.env.jwt_token,{expiresIn:36000},(err,token)=>{
            if(err) throw err
            return res.json({token})
        })


    } catch (err) {
        console.log(err.message);
        return res.status(500).json({"msg":"Internal Server Error"});
    }
})


//Login Route
// POST     /api/user/login
// access   public

router.post("/login",[
    check("email","Enter a valid email").isEmail(),
    check("password","Password field is required").not().isEmpty()
],async(req,res)=>{

    const errors=validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {email,password}=req.body;

    try {
        let user=await User.findOne({email});

        if(!user){
            return res.status(422).json({msg:"Invalid Credentials"});
        }

        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(422).json({msg:"Invalid Credentials"});

        }

        jwt.sign({_id:user._id,username:user.username},process.env.jwt_token,{expiresIn:36000},(err,token)=>{
            if(err) throw err;
            res.json({token})
        })
    } catch (err) {
        console.log(err.message);
        return res.status(500).send("Internal Server Error");
    }

})


// Get all details pf loggedIn user
// GET      /api/user
// access   private
router.get("/",auth,async(req,res)=>{
    try {
        
        const user=await User.findById(req.user._id).select("-password");
        res.json(user)

    } catch (err) {
        console.log(err.message);
        return res.status(500).send("Internal Server Error");
    }
})



// Add your profile data
// POST     /api/user/profile
// access   Private
router.post("/profile",[auth,[
    check("age","Age is required").not().isEmpty(),
    check("weight","Weight is required").not().isEmpty(),
    check("height","Height is required").not().isEmpty(),
    check("gender","Gender is required").not().isEmpty(),
    check("fitnessgoals","Please add your fitness goals").not().isEmpty()
]],async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    let profile_data={};
    profile_data.user=req.user._id;
    const {age,weight,height,gender,fitnessgoals} =req.body;
    if(age) profile_data.age=age;
    if(weight) profile_data.weight=weight
    if(height) profile_data.height=height
    if(gender) profile_data.gender=gender
    if(typeof fitnessgoals!=="undefined"){
        profile_data.fitnessgoals=fitnessgoals.split(",");
    }

    try {
        const profile = new Profile(profile_data);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({"msg":"Internal Server Error"})
    }

})


// Get your own profile
// GET      /api/user/profile/own
// Access   Private
router.get("/profile/own",auth,async(req,res)=>{
    try{
        const user_profile=await Profile.findOne({user:req.user._id})
        if(user_profile!==null)
        return res.json(user_profile);
        res.json({"msg":"You don't have any profile"})
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({"msg":"Internal Server Error"});
    }
})



export default router