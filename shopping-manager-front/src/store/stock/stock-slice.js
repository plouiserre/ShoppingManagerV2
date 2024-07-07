import { createSlice } from "@reduxjs/toolkit";

export const stockSlice = createSlice({
    name:"stockSlice",
    initialState:{
        stockItemList:[]
    },
    reducers:{
        addStockItem:(currentSlice, action)=>{
            currentSlice.stockItemList.push({...action.payload});
        }
    }
})

const {addStockItem} = stockSlice.actions;

export {addStockItem}