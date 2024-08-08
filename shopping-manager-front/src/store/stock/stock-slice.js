import { createSlice } from "@reduxjs/toolkit";

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

export const stockSlice = createSlice({
    name:"stockSlice",
    initialState:{
        stocks:[],
        stock : {}
    },
    reducers:{
        addStockItem:(currentSlice, action)=>{
            getId(currentSlice.stocks, action.payload);
            setStatus(action.payload)
            currentSlice.stocks.push({...action.payload});
        },
        deleteSelectStockItem:(currentSlice, action)=>{
            var indexs = []
            currentSlice.stocks.map((stock, index) =>{
                currentSlice.stocksSelected.map(selected =>{
                    if(stock.Id === selected.Id){
                        indexs.push(index)
                    }
                })  
            })
            indexs.map(element =>{
                currentSlice.stocks.splice(element, 1)
            })
            currentSlice.stocksSelected = []
        },
        deleteExpiredStock:(currentSlice, action)=>{
            var today = new Date();
            var stockNotExpired = []
            currentSlice.stocks.map((item)=>{
                var datePeremption = new Date(item.DatePeremption)
                if(today < datePeremption){
                    stockNotExpired.push(item)
                }
            })
            currentSlice.stocks = stockNotExpired;
        },
        deleteStockItem:(currentSlice, action)=>{
            var newStocks = currentSlice.stocks.filter((item)=>item.Id !==action.payload.Id);
            currentSlice.stocks = newStocks;
        }, 
        getStock:(currentSlice, action)=>{
            currentSlice.stocks.map((element) =>{
                    if(element.Id === action.Id){
                        currentSlice.stock = element
                    }
            })
        },
        editStock:(currentSlice, action)=>{
            var index = 0;
            for(var i = 0; i<currentSlice.stocks.length;i++){
                var element = currentSlice.stocks[i]
                if(element.Id === action.payload.Id){
                    break
                }
                index+=1
            }
            currentSlice.stocks.splice(index, 1, action.payload)
        }
    }
})

const {addStockItem, deleteExpiredStock, deleteStockItem, getStock, editStock} = stockSlice.actions;

export {addStockItem, deleteExpiredStock, deleteStockItem, getStock, editStock}