import React, { useState,useContext, useEffect } from 'react'
import {Link} from 'react-router-dom';
import axios from "axios";
import AuthContext from "../context/auth/authContext";
import setAuthToken from "../utils/setAuthToken";
const FoodCalories = (props) => {

    const authContext = useContext(AuthContext);
    const [items,setItems]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        authContext.loadUser();

        const food_items = async()=>{
            setLoading(true);
         const food_calories = await axios.get("/api/food/fooditems");
         //console.log(food_calories.data)
            setItems(food_calories.data);
            setLoading(false)
        }
        food_items()

    },[items,loading])

    const [food,setFood]=useState({
        fooditem:"",
        quantity:0,
    })

    //console.log(items)

    const [calories,setCalories]=useState(0);
    
    const {fooditem,quantity}=food;

    const onChange = (e) => {
        setFood({...food,[e.target.name]:e.target.value})
    }

    const onResetData = ()=>{
         setFood({
            fooditem:"",
            quantity:0
        })
    }
    const onSubmit=async(e)=>{
         e.preventDefault();
        // console.log(authContext.user._id)
        // Milk -> 630 cal/lt
        // Rice -> 1300 cal/1kg
        // Egg -> 78 cal/1
        // Cheese -> 402 cal/100gm
        // Butter -> 707 cal/100gm
        // Sugar -> 4/100gm
        // Honey -> 304 cal/10ml
        
       
       let calo=0;
       if(fooditem==="Milk"){
           calo=0.63*Number(quantity);
           setCalories(calo)
       }
       if(fooditem==="Rice"){
           calo=1.3*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Egg"){
           calo=78*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Cheese"){
           calo=4.02*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Butter"){
           calo=7.07*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Sugar"){
           calo=0.04*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Honey"){
           calo=30.4*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Wheat"){
           calo=3.4*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Potato"){
           calo=283*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Brinjal"){
           calo=136*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Drum stick"){
           calo=33*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Onion"){
           calo=44*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Carrot"){
           calo=25*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Beetroot"){
           calo=35*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Lemon"){
           calo=17*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Apple"){
           calo=95*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Mango"){
           calo=201*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Banana"){
           calo=105*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Papaya"){
           calo=120*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Guava"){
           calo=38*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Grape"){
           calo=2*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Pineapple"){
           calo=452*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Watermelon"){
           calo=1371*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Cantaloupe"){
           calo=274*Number(quantity);
           setCalories(calo)

       }
       if(fooditem==="Stawberry"){
           calo=4*Number(quantity);
           setCalories(calo)

       }
      
  
        const cal={
            user:authContext.user._id,
            fooditem,
            quantity,
            calories:calo
        }
    //console.log(cal)
        
        let config = {
            "Content-Type":"application/json"
        }
        try {
            const food_to_be_added = await axios.post("/api/food",cal,config)
           // console.log(food_to_be_added)
        }catch(err){
            console.log(err.message)
        }
       
    }
    return (
        <div>
           
            <h1>Track your Calories</h1>
            <form className="container mt-3 card  p-4" style={{width:"400px"}}>
            <div className="form-group">
            <label htmlFor="fooditem">Select your Fooditem</label>
                <select className="form-control" id="fooditem" name="fooditem" value={fooditem} onChange={onChange} required>
                <option>Select your choice</option>
                <option value="Milk">Milk</option>
                <option value="Rice">Rice</option>
                <option value="Egg">Egg</option>
                <option value="Cheese">Cheese</option>
                <option value="Butter">Butter</option>
                <option value="Sugar">Sugar</option>
                <option value="Honey">Honey</option>
                <option value="Wheat">Wheat</option>
                <option value="Potato">Potato</option>
                <option value="Brinjal">Brinjal</option>
                <option value="Lady finger">Lady finger</option>
                <option value="Drum stick">Drum stick</option>
                <option value="Onion">Onion</option>
                <option value="Carrot">Carrot</option>
                <option value="Beetroot">Beetroot</option>
                <option value="Lemon">Lemon</option>
                <option value="Apple">Apple</option>
                <option value="Mango">Mango</option>
                <option value="Banana">Banana</option>
                <option value="Papaya">Papaya</option>
                <option value="Guava">Guava</option>
                <option value="Grape">Grape</option>
                <option value="Pineapple">Pineapple</option>
                <option value="Watermelon">Watermelon</option>
                <option value="Cantaloupe">Cantaloupe</option>
                <option value="Strawberry">Strawberry</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" className="form-control" name="quantity" id="quantity" onChange={onChange} value={quantity} required  />
                <small>If item is liquid, quantity must be in ml.</small>
                <small>If item is solid, quantity must be in grams.</small>
                <small>If item is Vegetables,Fruits and Egg, quantity must be a Number.</small>
            </div>
            
            <button className="btn btn-block btn-success mb-4" type="submit" onClick={onSubmit} >Track your Calories</button>
            <button className="btn btn-block btn-danger mb-4" type="submit" onClick={onResetData} >Reset</button>
        </form>
        {/* <Link to="/calories/all">
        <button className="btn btn-block btn-primary mb-4"  >All your Tracks</button>
        </Link> */}
        <h1 className="col-12 mt-4"><span className="text-primary">Approximate Calories :</span>  {calories}</h1>

        
    </div>
    )
}


export default FoodCalories

