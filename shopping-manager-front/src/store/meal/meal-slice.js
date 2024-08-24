import { createSlice } from "@reduxjs/toolkit";

export const mealSlice=createSlice({
    name:"mealSlice",
    initialState:{
        meals:[],
        mealItems:[]
    },
    reducers:{
        addMeal:(currentState, action)=>{
            currentState.meals.push({...action.payload});
        },
        addMealItems:(currentState, action)=>{
            currentState.mealItems.push({...action.payload});
        },
        initiateMealItems:(currentState, action)=>{
            currentState.mealItems.push({...action.payload});
        }
    }
})

const {addMeal, addMealItems, initiateMealItems} = mealSlice.actions;

export {addMeal, addMealItems, initiateMealItems}