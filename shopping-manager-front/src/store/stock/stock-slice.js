import { createSlice } from "@reduxjs/toolkit";

function getId(elements, elementToAdd){
    if(elements !== undefined){
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
        deleteStockItem:(currentSlice, action)=>{
            var newStocks = currentSlice.stocks.filter((item)=>item.Id !==action.payload.Id);
            currentSlice.stocks = newStocks;
        }
    }
})

const {addStockItem, deleteStockItem} = stockSlice.actions;

export {addStockItem, deleteStockItem}