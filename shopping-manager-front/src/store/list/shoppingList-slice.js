import { createSlice } from "@reduxjs/toolkit";

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

export const shoppingListSlice = createSlice({
    name:"shoppingListSlice",
    initialState:{
        shoppingLists :[]
    },
    reducers:{
        deleteShoppingList:(currentState, action)=>{
            var okShoppingList = currentState.shoppingLists.filter((item)=>item.id !==action.payload.id);
            currentState.shoppingLists = okShoppingList;
        },
        editShoppingList:(currentState, action)=>{
            var shoppingListToEdit = action.payload.shoppingList;
            shoppingListToEdit.shoppingListItems = action.payload.shoppingListItems;
            var allShoppingLists = [];
            currentState.shoppingLists.map((shoppingList)=>{
                if(shoppingListToEdit.id === shoppingList.id){
                    allShoppingLists.push(shoppingListToEdit);
                }
                else{
                    allShoppingLists.push(shoppingList);
                }
            })
            currentState.shoppingLists = allShoppingLists;
        },
        saveShoppingList:(currentState, action)=>{
            var newList = action.payload.shoppingList;
            newList.shoppingListItems = action.payload.shoppingListItems;
            var shoppingLists = JSON.parse(JSON.stringify(currentState.shoppingLists));
            var id = getId(shoppingLists, newList);
            newList.id = id
            currentState.shoppingLists.push({...newList});
            currentState.shoppingListItems=[firstShoppingListItem];
        }
    }
})

const {deleteShoppingList, editShoppingList, saveShoppingList} = shoppingListSlice.actions;

export {deleteShoppingList, editShoppingList, saveShoppingList}