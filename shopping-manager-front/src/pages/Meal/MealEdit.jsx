import { MealForm } from "../../containers/Meal/MealForm/MealForm";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  flushMealItem,
  storeEditMealItems,
} from "../../store/meal/mealItem-slice";

//TODO try to rework the utility of storeEditMealItems because it is need on MealForm.jsx
export function MealEdit() {
  var params = useParams();
  var id = parseInt(params.id);
  var dispatch = useDispatch();
  const meals = useSelector((store) => store.MEAL.meals);
  const mealSelected = meals.find((item) => item.id === id);

  const [meal, setMeal] = useState({ ...mealSelected });

  dispatch(flushMealItem());
  dispatch(storeEditMealItems(mealSelected));

  return (
    <>
      <MealForm meal={meal} setMeal={setMeal} actionType={"Edit"} />
    </>
  );
}
