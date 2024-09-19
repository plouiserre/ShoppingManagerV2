import { createSlice, current } from "@reduxjs/toolkit";

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

export const listSlice = createSlice({
    name:"listSlice",
    initialState:{
        lists:[]
    },
    reducers:{
        saveList:(currentState, action)=>{
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

const {saveList} = listSlice.actions;

export {saveList}