import { MealForm } from "../../containers/Meal/MealForm/MealForm";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  flushMealItem,
  storeEditMeal,
  storeEditMealItems,
} from "../../store/meal/meal-slice";

export function MealEdit() {
  var params = useParams();
  var id = parseInt(params.id);
  var dispatch = useDispatch();
  const meals = useSelector((store) => store.MEAL.meals);
  const mealSelected = meals.find((item) => item.id === id);

  const [meal, setMeal] = useState({ ...mealSelected });

  dispatch(flushMealItem());
  dispatch(storeEditMeal(mealSelected));
  dispatch(storeEditMealItems(mealSelected));

  return (
    <>
      <MealForm meal={meal} setMeal={setMeal} actionType={"Edit"} />
    </>
  );
}
