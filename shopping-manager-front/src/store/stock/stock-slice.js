import { createSlice } from "@reduxjs/toolkit";

export const stockSlice = createSlice({
    name:"stockSlice",
    initialState:{
        stocks:[]
    },
    reducers:{
        addStock:(currentSlice, action)=>{
            currentSlice.stocks.push({...action.payload});
        }
    }
})

const {addStock} = stockSlice.actions;

export {addStock}