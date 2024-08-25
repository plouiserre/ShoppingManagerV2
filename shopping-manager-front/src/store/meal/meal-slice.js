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

export const mealSlice = createSlice({
    name:"mealSlice",
    initialState:{
        meals:[],
        mealItems:[
            {
                id:1,
                stock:{},
                quantity:0}]
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
            var mealItems = JSON.parse(JSON.stringify(currentState.mealItems))
            var id = getId(mealItems, {
                stock:{},
                quantity:0
            });
            currentState.mealItems.push({     
                    id:id,
                    stock:{},
                    quantity:0               
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