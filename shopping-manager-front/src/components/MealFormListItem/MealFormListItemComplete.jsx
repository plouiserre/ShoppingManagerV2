import s from "./style.module.css";
import { LabelTypeStock } from "../LabelTypeStock/LabelTypeStock";
import { Status } from "../Status/Status";
import { CustomButton } from "../CustomButton/CustomButton";
import { deleteMealItems } from "../../store/meal/meal-slice";
import { useDispatch } from "react-redux";

export function MealFormListItemComplete({ mealItemWorking }) {
  const dispatch = useDispatch();
  function deleteMealItem() {
    dispatch(deleteMealItems(mealItem));
  }
  const mealItem = { ...mealItemWorking };
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
            mealItem.stock.Name != undefined &&
            mealItem.stock.Name}
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom}`}
        >
          {mealItem.stock.Name != undefined && (
            <LabelTypeStock foodType={mealItem.stock.Type} />
          )}
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
                actionButton={() => alert("to implement")}
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
