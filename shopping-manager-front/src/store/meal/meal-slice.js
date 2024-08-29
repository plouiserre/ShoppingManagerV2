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
                quantity:0,
                statusMeal : "Creation"}]
            },
    reducers:{
        addMeal:(currentState, action)=>{
            currentState.meals.push({...action.payload});
        },
        addMealItems:(currentState, action)=>{
            currentState.mealItems.push({...action.payload});
        },
        addMealItemsEmpty:(currentState, action)=>{
            var mealItems = JSON.parse(JSON.stringify(currentState.mealItems));
            var id = getId(mealItems, {
                stock:{},
                quantity:0
            });
            currentState.mealItems.push({     
                    id:id,
                    stock:{},
                    quantity:0,
                    statusMeal : "Creation"              
            })
        },
        deleteMealItems:(currentState, action)=>{
            var newMealItems = currentState.mealItems.filter((item)=>item.id !==action.payload.id);
            currentState.mealItems = newMealItems;
        },
        completeMealItem:(currentState, action)=>{
            var newMealItems = []
            currentState.mealItems.map((item)=>{
                if(item.id !== action.payload.id){
                    newMealItems.push(item)
                }else{
                    var newItem = action.payload
                    newItem.statusMeal = "Validation"
                    newMealItems.push(newItem)
                }
            })
            currentState.mealItems = newMealItems
        },
        stopCompleteMealItem:(currentState, action)=>{
            var newMealItems = []
            currentState.mealItems.map((item)=>{
                if(item.id === action.payload.id){
                    item.statusMeal = "Edit";
                }   
                newMealItems.push(item)
            })
            currentState.mealItems = newMealItems
        }
    }
})

const {addMeal, addMealItems, addMealItemsEmpty, completeMealItem, deleteMealItems, stopCompleteMealItem} = mealSlice.actions;

export {addMeal, addMealItems, addMealItemsEmpty,completeMealItem, deleteMealItems, stopCompleteMealItem}