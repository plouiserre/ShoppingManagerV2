import { MealForm } from "../../containers/Meal/MealForm/MealForm";
import { useDispatch } from "react-redux";
import { flushMealItem } from "../../store/meal/mealItem-slice";

export function AddMeal() {
  var dispatch = useDispatch();
  dispatch(flushMealItem());
  return (
    <>
      <MealForm actionType={"Add"} />
    </>
  );
}
