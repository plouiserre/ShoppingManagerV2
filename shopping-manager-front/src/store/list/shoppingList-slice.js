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

var firstListItem={
    id:1,
    name:"",
    status:"",
    quantity:0
}

export const shoppingListSlice = createSlice({
    name:"shoppingListSlice",
    initialState:{
        lists:[]
    },
    reducers:{
        deleteShoppingList:(currentState, action)=>{
            var okShoppingList = currentState.lists.filter((item)=>item.id !==action.payload.id);
            currentState.lists = okShoppingList;
        },
        saveShoppingList:(currentState, action)=>{
            var newList = action.payload.list;
            newList.listItems = action.payload.listItems;
            var lists = JSON.parse(JSON.stringify(currentState.lists));
            var id = getId(lists, newList);
            newList.id = id
            currentState.lists.push({...newList});
            currentState.listItems=[firstListItem];
        }
    }
})

const {deleteShoppingList, saveShoppingList} = shoppingListSlice.actions;

export {deleteShoppingList, saveShoppingList}