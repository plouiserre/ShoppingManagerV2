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

function calculateDayMomentValue(meal){
    var momentDayNumber = 0;
    momentDayNumber+=determineDayNumber(meal.Day);
    momentDayNumber+=determineMomentNumber(meal.Moment);
    return momentDayNumber;
}

function determineDayNumber(day){
    var dayNumber = 0;
    if(day==="Lundi"){
        dayNumber=10;
    }
    else if(day==="Mardi"){
        dayNumber=20;
    }
    else if(day==="Mercredi"){
        dayNumber=30;
    }
    else if(day==="Jeudi"){
        dayNumber=40;
    }
    else if(day==="Vendredi"){
        dayNumber=50;
    }
    else if(day==="Samedi"){
        dayNumber=60;
    }
    else if(day==="Dimanche"){
        dayNumber=70;
    }
    return dayNumber;
}

function determineMomentNumber(moment){
    var momentNumber =0;
    if(moment==="Petit-déjeuner"){
        momentNumber=1;
    }else if(moment==="Déjeuner"){
        momentNumber=2;
    }else if(moment==="Goûter"){
        momentNumber=3;
    }else if(moment==="Dîner"){
        momentNumber=4;
    }
    return momentNumber;
}

export const mealSlice = createSlice({
    name:"mealSlice",
    initialState:{
        meals:[],
        mealItems:[firstNewMealItem ],
        editMealData :{}
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
        deleteMeal:(currentState, action)=>{
            var newMeals = currentState.meals.filter((item)=>item.id !==action.payload.id);
            currentState.meals = newMeals;
        },
        deleteMealItems:(currentState, action)=>{
            var newMealItems = currentState.mealItems.filter((item)=>item.id !==action.payload.id);
            currentState.mealItems = newMealItems;
        }, 
        editMeal:(currentState, action)=>{
            var allMeals=[];
            currentState.meals.map((meal)=>{
                if(meal.id===action.payload.id){
                    var mealUpdate = action.payload
                    mealUpdate.DayMomentValue = calculateDayMomentValue(mealUpdate);
                    allMeals.push(mealUpdate);}
                else
                    allMeals.push(meal);
            })
            currentState.meals = allMeals;
        },
        flushMealItem:(currentState, action)=>{
            currentState.mealItems=[];
        },
        saveMeal:(currentState, action)=>{
            var newMeal = action.payload;
            var meals = JSON.parse(JSON.stringify(currentState.meals));
            var id = getId(meals, action.payload);
            newMeal.id = id
            newMeal.DayMomentValue = calculateDayMomentValue(newMeal);
            currentState.meals.push({...newMeal});
            currentState.mealItems = [firstNewMealItem ];
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
        storeEditMeal:(currentState, action)=>{
            currentState.editMealData = action.payload
        }, 
        storeEditMealItems :(currentState, action)=>{
            currentState.mealItems = action.payload.mealItems;
        }
    }
})

const {addMealItems, addMealItemsEmpty, completeMealItemExistingMeal, completeMealItemNewMeal, deleteMeal, deleteMealItems, editMeal, flushMealItem, saveMeal, stopCompleteMealItem, storeEditMeal, storeEditMealItems} = mealSlice.actions;

export {addMealItems, addMealItemsEmpty,completeMealItemExistingMeal, completeMealItemNewMeal, deleteMeal, deleteMealItems, editMeal, flushMealItem, saveMeal, stopCompleteMealItem, storeEditMeal, storeEditMealItems}