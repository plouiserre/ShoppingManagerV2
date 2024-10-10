import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

function getId(elements){
    var id = 0 
    if(elements !== undefined && elements.length >0){
        var indexs = []
        elements.map((element)=>{
            indexs.push(element.Id)
        })
        var maxId = Math.max(...indexs)
        id = maxId+1;
    }
    else {
        id = 1;
    }
    return id;
}

//TODO centralize like getId
function getDateFormatted(){
    return moment().format("YYYY-MM-DD"); 
}

var firstNewStockItem = 
    {
        Id: 1,
        DatePeremption: getDateFormatted(),
        IsDateSelected: true,
        Quantity: 0,
        statusStockItem : "Creation"
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
                DatePeremption: getDateFormatted(),
                IsDateSelected: true,
                Quantity: 0,
                statusStockItem : "Creation"
            })
        },
        completeStockItem:(currentState, action)=>{
            var newStockItems = []
            currentState.stockItems.map((item)=>{
                if(item.Id !== action.payload.Id){
                    newStockItems.push(item)
                }else{
                    var newItem = action.payload
                    newItem.statusStockItem = "Validation"
                    newStockItems.push(newItem)
                }
                currentState.stockItems = newStockItems
            })
        },
        deleteStockItem:(currentState, action)=>{
            var newStockItems = currentState.stockItems.filter((item)=>item.Id !== action.payload.Id);
            currentState.stockItems = newStockItems;
        },
        flushStockItem:(currentState, action)=>{
            currentState.stockItems =[firstNewStockItem]
        },
        stopCompleteStockItem:(currentState, action)=>{
            var newStockItems = []
            currentState.stockItems.map((item)=>{
                if(item.Id === action.payload.Id){
                    item.statusStockItem = "Edit";
                }   
                newStockItems.push(item)
            })
            currentState.stockItems = newStockItems
        },
        storeEditStockItems:(currentState, action)=>{
            currentState.stockItems = action.payload.stockItems;
        }
    }
})

const {addStockItemEmpty, completeStockItem, deleteStockItem, flushStockItem, stopCompleteStockItem, storeEditStockItems} = stockItemSlice.actions;

export {addStockItemEmpty, completeStockItem, deleteStockItem, flushStockItem, stopCompleteStockItem, storeEditStockItems}