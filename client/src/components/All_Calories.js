import React, { useEffect,useContext,useState } from 'react'
import setAuthToken from "../utils/setAuthToken";
import AuthContext from "../context/auth/authContext";
import axios from "axios"

const All_Calories = () => {
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

    },[])
    return (
        <div>
            <h1>All</h1>
    {items.length>0&&(<h2>{items.length}</h2>)}
        </div>
    )
}

export default All_Calories
