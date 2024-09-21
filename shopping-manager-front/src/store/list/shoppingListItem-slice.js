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

var firstListItem={
    id:1,
    name:"",
    status:"",
    quantity:0
}

export const shoppingListItemSlice = createSlice({
    name : "shoppingListItemSlice",
    initialState:{
        listItems : [firstListItem]
    },
    reducers:{
        addShoppingListItemEmpty:(currentState, action)=>{
            var listItems = JSON.parse(JSON.stringify(currentState.listItems));
            var id = getId(listItems, {
                name:"",
                type:"",
                quantity:0
            });
            currentState.listItems.push({     
                    id:id,
                    name:"",
                    type:"",
                    quantity:0,
                    statusList : "Input"          
            })
        },
        completeShoppingListItemNewList:(currentState, action)=>{
            var newListItems = []
            currentState.listItems.map((item)=>{
                if(item.id !== action.payload.id){
                    newListItems.push(item)
                }else{
                    var newItem = action.payload
                    newItem.statusList = "Validation"
                    newListItems.push(newItem)
                }
            })
            currentState.listItems = newListItems
        },
        deleteShoppingListItems:(currentState, action)=>{
            var newListItems = currentState.listItems.filter((item)=>item.id!==action.payload.id);
            currentState.listItems = newListItems;
        },
        flushShoppingListItem:(currentState, action)=>{
            currentState.listItems = [firstListItem];
        },
        stopCompleteShoppingListItem:(currentState, action)=>{
            var newListItems = []
            currentState.listItems.map((item)=>{
                if(item.id === action.payload.id){
                    item.statusList = "Input";
                }   
                newListItems.push(item)
            })
            currentState.listItems = newListItems
        },
    }
})

const {addShoppingListItemEmpty, completeShoppingListItemNewList, deleteShoppingListItems, flushShoppingListItem, stopCompleteShoppingListItem} = shoppingListItemSlice.actions;

export {addShoppingListItemEmpty, completeShoppingListItemNewList, deleteShoppingListItems, flushShoppingListItem, stopCompleteShoppingListItem}