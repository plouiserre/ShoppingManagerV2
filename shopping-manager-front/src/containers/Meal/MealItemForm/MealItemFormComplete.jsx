import s from "./style.module.css";
import { Status } from "../../../components/Reusable/Status/Status";
import { CustomButton } from "../../../components/Reusable/CustomButton/CustomButton";
import {
  deleteMealItems,
  stopCompleteMealItem,
} from "../../../store/meal/mealItem-slice";
import { useDispatch } from "react-redux";
import { getTypeFoodLabel } from "../../../domain/manageFoodType";

export function MealItemFormComplete({ mealItemWorking }) {
  const dispatch = useDispatch();
  function deleteMealItem() {
    dispatch(deleteMealItems(mealItem));
  }
  function editMealItem() {
    dispatch(stopCompleteMealItem(mealItem));
  }
  const mealItem = { ...mealItemWorking };
  const mealItemType =
    mealItem.stock.Name !== undefined
      ? getTypeFoodLabel(mealItem.stock.Type)
      : "";
  return (
    <>
      <div className="row">
        <div className={`col-3`}></div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom}`}
        >
          {mealItem.id}
        </div>
        <div
          className={`col-2 ${s.cellMealsSubList} ${s.cellMealsSubListbottom}`}
        >
          {mealItem.stock !== undefined &&
            mealItem.stock.Name !== undefined &&
            mealItem.stock.Name}
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom}`}
        >
          {mealItemType !== "" && mealItemType}
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom}`}
        >
          {mealItem.stock.Name !== undefined && mealItem.quantity}
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.mealItemStatus} ${s.cellMealsSubListbottom}`}
        >
          {mealItem.stock.Name !== undefined && (
            <Status element={mealItem.stock} />
          )}
        </div>
        <div
          className={`col-2 ${s.cellMealsSubList} ${s.cellMealsSubListRight} ${s.cellMealsSubListbottom}`}
        >
          {mealItem.stock.Name !== undefined && (
            <div className={`${s.actionsMeals}`}>
              <CustomButton
                labelButton={"Edit"}
                actionButton={() => editMealItem()}
                customClass={"btn btn-secondary"}
              />
              <CustomButton
                labelButton={"Supprimer"}
                actionButton={() => deleteMealItem()}
                customClass={"btn btn-danger"}
              />
            </div>
          )}
        </div>
        <div className={`col-2`}></div>
      </div>
    </>
  );
}
