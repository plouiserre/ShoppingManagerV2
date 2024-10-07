import { createSlice } from "@reduxjs/toolkit";

//TODO mutualize with this method in meal-slice.js
function getId(elements, elementToAdd){
    if(elements !== undefined && elements.length >0){
        var indexs = []
        elements.map((element)=>{
            indexs.push(element.Id)
        })
        var maxId = Math.max(...indexs)
        var id = maxId+1;
        elementToAdd.Id = id;
    }
    else {
        elementToAdd.Id = 1;
    }
}

function setStatus(element){
    element.Status = 'ok'
}

var firstNewStockItem = 
    {
        Id: 1,
        DatePeremption: new Date().toJSON(),
        IsDateSelected: true,
        Quantity: 0,
        statusStockItem : "Creation"
    };

export const stockSlice = createSlice({
    name:"stockSlice",
    initialState:{
        stockItems :[],
        stocks:[],
        stock : {}
    },
    reducers:{
        addStock:(currentState, action)=>{
            var newStock = action.payload.stock;
            newStock.stockItems = action.payload.stockItems;
            getId(currentState.stocks, newStock);
            setStatus(newStock)
            currentState.stocks.push({...action.payload});
            currentState.stockItems = [firstNewStockItem];
        },
        deleteExpiredStock:(currentState, action)=>{
            var today = new Date();
            var stockNotExpired = []
            currentState.stocks.map((item)=>{
                var datePeremption = new Date(item.DatePeremption)
                if(today < datePeremption){
                    stockNotExpired.push(item)
                }
            })
            currentState.stocks = stockNotExpired;
        },
        deleteStock:(currentState, action)=>{
            var newStocks = currentState.stocks.filter((item)=>item.Id !==action.payload.Id);
            currentState.stocks = newStocks;
        }, 
        getStock:(currentState, action)=>{
            currentState.stocks.map((element) =>{
                    if(element.Id === action.Id){
                        currentState.stock = element
                    }
            })
        },
        editStock:(currentState, action)=>{
            var index = 0;
            for(var i = 0; i<currentState.stocks.length;i++){
                var element = currentState.stocks[i]
                if(element.Id === action.payload.Id){
                    break
                }
                index+=1
            }
            currentState.stocks.splice(index, 1, action.payload)
        }
    }
})

const {addStock, deleteExpiredStock, deleteStock, getStock, editStock} = stockSlice.actions;

export {addStock, deleteExpiredStock, deleteStock, getStock, editStock}