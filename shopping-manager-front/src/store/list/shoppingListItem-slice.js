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

export const listItemSlice = createSlice({
    name : "listItemSlice",
    initialState:{
        listItems : [firstListItem]
    },
    reducers:{
        addListItemEmpty:(currentState, action)=>{
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
        completeListItemNewList:(currentState, action)=>{
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
        deleteListItems:(currentState, action)=>{
            var newListItems = currentState.listItems.filter((item)=>item.id!==action.payload.id);
            currentState.listItems = newListItems;
        },
        flushListItem:(currentState, action)=>{
            currentState.listItems = [firstListItem];
        },
        stopCompleteListItem:(currentState, action)=>{
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

const {addListItemEmpty, completeListItemNewList, deleteListItems, flushListItem, stopCompleteListItem} = listItemSlice.actions;

export {addListItemEmpty, completeListItemNewList, deleteListItems, flushListItem, stopCompleteListItem}