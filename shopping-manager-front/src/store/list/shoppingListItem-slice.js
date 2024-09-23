import { createSlice } from "@reduxjs/toolkit";

//TODO centralize getId method
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

var firstShoppingListItem={
    id:1,
    name:"",
    status:"",
    quantity:0
}

export const shoppingListItemSlice = createSlice({
    name : "shoppingListItemSlice",
    initialState:{
        shoppingListItems : [firstShoppingListItem]
    },
    reducers:{
        addShoppingListItemEmpty:(currentState, action)=>{
            var shoppingListItems = JSON.parse(JSON.stringify(currentState.shoppingListItems));
            var id = getId(shoppingListItems, {
                name:"",
                type:"",
                quantity:0
            });
            currentState.shoppingListItems.push({     
                    id:id,
                    name:"",
                    type:"",
                    quantity:0,
                    statusList : "Input"          
            })
        },
        completeShoppingListItemNewList:(currentState, action)=>{
            var newShoppingListItems = []
            currentState.shoppingListItems.map((item)=>{
                if(item.id !== action.payload.id){
                    newShoppingListItems.push(item)
                }else{
                    var newItem = action.payload
                    newItem.statusList = "Validation"
                    newShoppingListItems.push(newItem)
                }
            })
            currentState.shoppingListItems = newShoppingListItems
        },
        deleteShoppingListItems:(currentState, action)=>{
            var newShoppingListItems = currentState.shoppingListItems.filter((item)=>item.id!==action.payload.id);
            currentState.shoppingListItems = newShoppingListItems;
        },
        flushShoppingListItem:(currentState, action)=>{
            currentState.shoppingListItems = [firstShoppingListItem];
        },
        stopCompleteShoppingListItem:(currentState, action)=>{
            var newShoppingListItems = []
            currentState.shoppingListItems.map((item)=>{
                if(item.id === action.payload.id){
                    item.statusList = "Input";
                }   
                newShoppingListItems.push(item)
            })
            currentState.shoppingListItems = newShoppingListItems
        },
    }
})

const {addShoppingListItemEmpty, completeShoppingListItemNewList, deleteShoppingListItems, flushShoppingListItem, stopCompleteShoppingListItem} = shoppingListItemSlice.actions;

export {addShoppingListItemEmpty, completeShoppingListItemNewList, deleteShoppingListItems, flushShoppingListItem, stopCompleteShoppingListItem}