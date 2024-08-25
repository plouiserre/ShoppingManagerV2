import { createSlice } from "@reduxjs/toolkit";

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

export const mealSlice = createSlice({
    name:"mealSlice",
    initialState:{
        meals:[],
        mealItems:[]
    },
    reducers:{
        addMeal:(currentState, action)=>{
            currentState.meals.push({...action.payload});
        },
        addMealItems:(currentState, action)=>{
            currentState.mealItems.push({...action.payload});
        },
        //TODO delete this useless method
        initiateMealItems:(currentState, action)=>{
            currentState.mealItems.push({...action.payload});
        }, 
        addMealItemsEmpty:(currentState, action)=>{
            var newItem = {
                id:id,
                stock:{},
                quantity:0
            };
            var id = getId(currentState.mealItems, newItem);
            currentState.mealItems.push({
                newItem
            })
        },
        deleteMealItems:(currentState, action)=>{
            var newMealItems = currentState.mealItems.filter((item)=>item.Id !==action.payload.Id);
            currentState.mealItems = newMealItems;
        },
        completeMealItem:(currentState, action)=>{
            var newMealItems = []
            currentState.mealItems.map((item)=>{
                if(item.id !== action.payload.id){
                    newMealItems.push(item)
                }else{
                    newMealItems.push(action.payload)
                }
            })
            currentState.mealItems = newMealItems
        }
    }
})

const {addMeal, addMealItems, initiateMealItems, addMealItemsEmpty, completeMealItem, deleteMealItems} = mealSlice.actions;

export {addMeal, addMealItems, initiateMealItems, addMealItemsEmpty,completeMealItem, deleteMealItems}