import { MealFormListItem } from "../MealFormListItem/MealFormListItem";
import { useSelector } from "react-redux";
import { MealFormListItemComplete } from "../MealFormListItem/MealFormListItemComplete";

export function MealFormList() {
  const mealItems = useSelector((store) => store.MEAL.mealItems);
  return (
    <>
      {mealItems.map((mealItem) => {
        if (mealItem.isComplete === true) {
          return (
            <MealFormListItemComplete
              mealItemWorking={mealItem}
              key={mealItem.iteration}
            />
          );
        } else {
          return (
            <MealFormListItem
              mealItemWorking={mealItem}
              key={mealItem.iteration}
            />
          );
        }
      })}
    </>
  );
}
