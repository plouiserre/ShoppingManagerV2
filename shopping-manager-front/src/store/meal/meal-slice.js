import { createSlice } from "@reduxjs/toolkit";

export const mealSlice=createSlice({
    name:"mealSlice",
    initialState:{
        meals:[]
    },
    reducers:{
        addmeal:(currentSlice, action)=>{
            currentSlice.mealItems.push(action.payload);
        }
    }
})

const {addmeal} = mealSlice.actions;

export {addmeal}