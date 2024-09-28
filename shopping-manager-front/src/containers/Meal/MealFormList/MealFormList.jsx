import { MealFormListItem } from "../../../containers/Meal/MealFormListItem/MealFormListItem";
import { useSelector } from "react-redux";
import { MealFormListItemComplete } from "../../../containers/Meal/MealFormListItem/MealFormListItemComplete";
import s from "./style.module.css";

export function MealFormList({ actionType }) {
  const mealItems = useSelector((store) => store.MEALITEM.mealItems);

  return (
    <div className={`${s.mealsSub}`}>
      <div className={`row`}>
        <div className={`col-3`}></div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListDarkBackgroundColor}`}
        >
          ID
        </div>
        <div
          className={`col-2 ${s.cellMealsSubList} ${s.cellMealsSubListDarkBackgroundColor}`}
        >
          Nom
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListDarkBackgroundColor}`}
        >
          Type
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListDarkBackgroundColor}`}
        >
          Quantité
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListDarkBackgroundColor}`}
        >
          Status
        </div>
        <div
          className={`col-2 ${s.cellMealsSubList} ${s.cellMealsSubListRight} ${s.cellMealsSubListDarkBackgroundColor}`}
        >
          Actions
        </div>
        <div className={`col-2`}></div>
      </div>
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
    </div>
  );
}
