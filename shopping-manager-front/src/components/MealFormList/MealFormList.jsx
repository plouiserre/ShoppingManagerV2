import { MealFormListItem } from "../MealFormListItem/MealFormListItem";
import { useSelector } from "react-redux";

export function MealFormList() {
  const mealItems = useSelector((store) => store.MEAL.mealItems);
  return (
    <>
      {mealItems.map((mealItem) => {
        return (
          <MealFormListItem
            mealItemWorking={mealItem}
            key={mealItem.iteration}
          />
        );
      })}
    </>
  );
}
