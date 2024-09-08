import { MealForm } from "../../containers/Meal/MealForm/MealForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { flushMealItem } from "../../store/meal/meal-slice";

export function AddMeal() {
  var dispatch = useDispatch();
  const [meal, setMeal] = useState({
    Day: "",
    Moment: "",
  });
  dispatch(flushMealItem());
  return (
    <>
      <MealForm meal={meal} setMeal={setMeal} actionType={"Add"} />
    </>
  );
}
