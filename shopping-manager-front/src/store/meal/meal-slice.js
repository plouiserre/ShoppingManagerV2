import { createSlice } from "@reduxjs/toolkit";

export const mealSlice=createSlice({
    name:"mealSlice",
    initialState:{
        meals:[],
        mealItems:[]
    },
    reducers:{
        addMeal:(currentSlice, action)=>{
            currentSlice.meals.push({...action.payload});
        },
        addMealItems:(currentSlice, action)=>{
            currentSlice.mealItems.push({...action.payload});
        },
        initiateMealItems:(currentSlice, action)=>{
            currentSlice.mealItems.push({...action.payload});
        }
    }
})

const {addMeal, addMealItems, initiateMealItems} = mealSlice.actions;

export {addMeal, addMealItems, initiateMealItems}