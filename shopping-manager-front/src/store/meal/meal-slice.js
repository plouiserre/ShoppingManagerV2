import { createSlice } from "@reduxjs/toolkit";

export const mealSlice = createSlice({
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
        //TODO delete this useless method
        initiateMealItems:(currentState, action)=>{
            currentState.mealItems.push({...action.payload});
        }, 
        addMealItemsEmpty:(currentState, action)=>{
            var id = currentState.mealItems.length + 1;
            currentState.mealItems.push({
                id:id,
                stock:{},
                quantity:0
            })
        }
    }
})

const {addMeal, addMealItems, initiateMealItems, addMealItemsEmpty} = mealSlice.actions;

export {addMeal, addMealItems, initiateMealItems, addMealItemsEmpty}