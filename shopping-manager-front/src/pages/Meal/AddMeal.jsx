import { MealForm } from "../../containers/Meal/MealForm/MealForm";
import { useState } from "react";

export function AddMeal() {
  const [meal, setMeal] = useState({
    Day: "",
    Moment: "",
  });
  return (
    <>
      <MealForm meal={meal} setMeal={setMeal} />
    </>
  );
}
