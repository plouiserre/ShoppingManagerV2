import { MealFormListItem } from "../MealFormListItem/MealFormListItem";
import { useSelector } from "react-redux";
import { MealFormListItemComplete } from "../MealFormListItem/MealFormListItemComplete";
import { MealFormListItemEdit } from "../MealFormListItem/MealFormListItemEdit";

export function MealFormList() {
  const mealItems = useSelector((store) => store.MEAL.mealItems);
  return (
    <>
      {mealItems.map((mealItem) => {
        if (mealItem.statusMeal === "Validation") {
          return (
            <MealFormListItemComplete
              mealItemWorking={mealItem}
              key={mealItem.iteration}
            />
          );
        } else if (mealItem.statusMeal === "Edit") {
          return (
            <MealFormListItemEdit
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
