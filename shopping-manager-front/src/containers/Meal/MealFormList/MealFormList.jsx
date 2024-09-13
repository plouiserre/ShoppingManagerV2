import { MealFormListItem } from "../../../containers/Meal/MealFormListItem/MealFormListItem";
import { useSelector } from "react-redux";
import { MealFormListItemComplete } from "../../../containers/Meal/MealFormListItem/MealFormListItemComplete";

export function MealFormList({ actionType }) {
  const mealItems = useSelector((store) => store.MEALITEM.mealItems);

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
              actionType={actionType}
            />
          );
        }
      })}
    </>
  );
}
