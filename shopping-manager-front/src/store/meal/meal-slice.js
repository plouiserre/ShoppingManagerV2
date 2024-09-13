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
        mealItems:[firstNewMealItem],
        mealUpdating : { 
                    },
                        },
    reducers:{
        deleteMeal:(currentState, action)=>{
            var newMeals = currentState.meals.filter((item)=>item.id !==action.payload.id);
            currentState.meals = newMeals;
        },
        editMeal:(currentState, action)=>{
            var mealToEdit = action.payload.meal;
            mealToEdit.mealItems = action.payload.mealItems;
            var allMeals=[];
            currentState.meals.map((meal)=>{
                if(meal.id===mealToEdit.id){
                    var mealUpdate = mealToEdit
                    mealUpdate.DayMomentValue = calculateDayMomentValue(mealUpdate);
                    allMeals.push(mealUpdate);}
                else
                    allMeals.push(meal);
            })
            currentState.meals = allMeals;
        },
        saveMeal:(currentState, action)=>{
            var newMeal = action.payload.meal;
            newMeal.mealItems = action.payload.mealItems;
            var meals = JSON.parse(JSON.stringify(currentState.meals));
            var id = getId(meals, newMeal);
            newMeal.id = id
            newMeal.DayMomentValue = calculateDayMomentValue(newMeal);
            currentState.meals.push({...newMeal});
            currentState.mealItems = [firstNewMealItem ];
        }
    }
})

const {deleteMeal, editMeal, saveMeal} = mealSlice.actions;

export {deleteMeal, editMeal, saveMeal}