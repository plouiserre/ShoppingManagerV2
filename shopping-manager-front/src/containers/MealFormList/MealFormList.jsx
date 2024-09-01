import { MealFormListItem } from "../../containers/MealFormListItem/MealFormListItem";
import { useSelector } from "react-redux";
import { MealFormListItemComplete } from "../../containers/MealFormListItem/MealFormListItemComplete";

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
