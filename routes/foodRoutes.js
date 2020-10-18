import express from 'express';
import auth from '../middleware/auth.js'
import Food from "../models/foodModel.js";
import { check,validationResult } from "express-validator";

const router=express.Router();

// Add food items to track calories
// POST  /api/food/
// access   Private
router.post("/",[auth,[
    check("fooditem","Enter Your food Item").not().isEmpty()
]],async(req,res)=>{
   
    const {fooditem,calories,quantity}=req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try { 
        const item=new Food({user:req.user._id,fooditem,calories,quantity})
        await item.save()
        res.json(item);
    } catch (err) {
        console.log(err.message);
        res.status(500).json("Internal Server Error");
    }
})


// Get food items to track calories
// GET  /api/food/fooditems
// access   Private
router.get("/fooditems",auth,async(req,res)=>{
   try {
       const items=await Food.find({user:req.user._id}).sort({date:-1});
       return res.json({items})
   } catch (err) {
    console.log(err.message);
    res.status(500).json("Internal Server Error");
   }
})


export default router;