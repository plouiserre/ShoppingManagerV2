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

var firstNewMealItem = 
    {
        id:1,
        stock:{},
        quantity:0,
        statusMeal : "Creation"
    };

export const mealItemSlice = createSlice({
    name:"mealItemSlice",
    initialState:{
        mealItems:[firstNewMealItem],
                        },
    reducers:{
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
        completeMealItemExistingMeal:(currentState, action)=>{
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
        completeMealItemNewMeal:(currentState, action)=>{
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
        deleteMealItems:(currentState, action)=>{
            var newMealItems = currentState.mealItems.filter((item)=>item.id !==action.payload.id);
            currentState.mealItems = newMealItems;
        }, 
        flushMealItem:(currentState, action)=>{
            currentState.mealItems=[];
        },
        initialMealUpdating:(currentState, action)=>{
            currentState.mealUpdating = {
                                        Day: "",
                                        Moment: ""
                                    }
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
        },
        storeEditMealItems :(currentState, action)=>{
            currentState.mealItems = action.payload.mealItems;
        }
    }
})

const {addMealItems, addMealItemsEmpty, completeMealItemExistingMeal, completeMealItemNewMeal, deleteMealItems, flushMealItem, initialMealUpdating, stopCompleteMealItem, storeEditMealItems} = mealItemSlice.actions;

export {addMealItems, addMealItemsEmpty,completeMealItemExistingMeal, completeMealItemNewMeal, deleteMealItems, flushMealItem, initialMealUpdating, stopCompleteMealItem, storeEditMealItems}