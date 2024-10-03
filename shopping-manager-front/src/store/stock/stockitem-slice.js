import { createSlice } from "@reduxjs/toolkit";

function getId(elements){
    var id = 0 
    if(elements !== undefined && elements.length >0){
        var indexs = []
        elements.map((element)=>{
            indexs.push(element.id)
        })
        var maxId = Math.max(...indexs)
        id = maxId+1;
    }
    else {
        id = 1;
    }
    return id;
}

var firstNewStockItem = 
    {
        Id: 1,
        DatePeremption: new Date(),
        IsDateSelected: true,
        Quantity: 0
    };

export const stockItemSlice = createSlice({
    name : "stockItemSlice",
    initialState : {
        stockItems : [firstNewStockItem]
    }, 
    reducers:{
        addStockItemEmpty:(currentState, action)=>{
            var stockItems = JSON.parse(JSON.stringify(currentState.stockItems))
            var id = getId(stockItems,{
                DatePeremption: new Date(),
                IsDateSelected: true,
                Quantity: 0
            })
            currentState.stockItems.push({
                Id:id, 
                DatePeremption: new Date(),
                IsDateSelected: true,
                Quantity: 0,
                StatusStock : "Creation"
            })
        }
    }
})

const {addStockItemEmpty} = stockItemSlice.actions;

export {addStockItemEmpty}