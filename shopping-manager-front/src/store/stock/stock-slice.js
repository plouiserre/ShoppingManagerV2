import { createSlice } from "@reduxjs/toolkit";

function getId(elements, elementToAdd){
    if(elements !== undefined){
        var elementsCount = elements.length
        var id = elementsCount+1;
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
        stocksSelected:[], 
        stock : {}
    },
    reducers:{
        addStockItem:(currentSlice, action)=>{
            getId(currentSlice.stocks, action.payload);
            setStatus(action.payload)
            currentSlice.stocks.push({...action.payload});
        },
        selectStockItem:(currentSlice, action) =>{
            currentSlice.stocksSelected.push({...action.payload});
        },
        deselectStockItem:(currentSlice, action)=>{
            currentSlice.stocksSelected = currentSlice.stocksSelected.filter(item => item.Id !== action.payload.Id)
        },
        emptySelectStockItem:(currentSlice, action) =>{
            currentSlice.stocksSelected = []
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
        }
    }
})

const {addStockItem, selectStockItem, emptySelectStockItem,deleteSelectStockItem, deselectStockItem} = stockSlice.actions;

export {addStockItem, selectStockItem, emptySelectStockItem, deleteSelectStockItem, deselectStockItem}