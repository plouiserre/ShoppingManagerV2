import { createSlice, current } from "@reduxjs/toolkit";

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
        stocksSelected:[]
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
        emptySelectStockItem:(currentSlice, action) =>{
            currentSlice.stocksSelected = []
        }
    }
})

const {addStockItem, selectStockItem, emptySelectStockItem} = stockSlice.actions;

export {addStockItem, selectStockItem, emptySelectStockItem}