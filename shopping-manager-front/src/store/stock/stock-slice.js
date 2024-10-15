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
            currentState.stocks.push(newStock);
            currentState.stockItems = [firstNewStockItem];
        },
        deleteExpiredStock:(currentState, action)=>{
            var today = new Date();
            var stocksFinal = []
            var stocksCleans = []
            currentState.stocks.map((stock)=>{
                var stockItems = []
                stock.stockItems.map((item)=>{
                    var datePeremption = new Date(item.DatePeremption);
                    if(today < datePeremption){
                        stockItems.push(item);
                    }
                })
                var stockClean = {...stock};
                stockClean.stockItems = stockItems;
                stocksCleans.push(stockClean);
            })
            stocksCleans.map((stock)=>{
                if(stock.stockItems.length >0)
                    stocksFinal.push(stock)
            })
            currentState.stocks = stocksFinal;
        },
        deleteStock:(currentState, action)=>{
            var newStocks = currentState.stocks.filter((item)=>item.Id !==action.payload.Id);
            currentState.stocks = newStocks;
        },
        editStock:(currentState, action)=>{
            var stockToEdit = action.payload.stock;
            stockToEdit.stockItems = action.payload.stockItems;
            var stocks = JSON.parse(JSON.stringify(currentState.stocks));
            var allStocks = [];
            stocks.map((stock)=>{
                if(stock.Id===stockToEdit.Id)
                    allStocks.push(stockToEdit)
                else
                    allStocks.push(stock);
            })
            currentState.stocks = allStocks;
        }, 
        getStock:(currentState, action)=>{
            currentState.stocks.map((element) =>{
                    if(element.Id === action.Id){
                        currentState.stock = element
                    }
            })
        }
    }
})

const {addStock, deleteExpiredStock, deleteStock, editStock, getStock} = stockSlice.actions;

export {addStock, deleteExpiredStock, deleteStock, editStock, getStock}