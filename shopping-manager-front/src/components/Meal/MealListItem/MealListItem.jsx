import { BootstrapIcon } from "../../Reusable/BootstrapIcon/BootstrapIcon";
import { Pictogramme } from "../../Reusable/Pictogramme/Pictogramme";
import s from "./style.module.css";

export function MealListItem({ meal }) {
  return (
    <div className={`row ${s.cellMealList}`}>
      <div className={`col-3 ${s.idMeal}`}>
        {meal.Day} {meal.Moment}
      </div>
      <div className={`col-3 ${s.quantityItems}`}>{meal.mealItems.length}</div>
      <div className={`col-2 ${s.statusMeal}`}>
        <Pictogramme pictoName="ok" height={50} width={50} />{" "}
      </div>
      <div className={`col-3 ${s.actionMeal}`}>
        <BootstrapIcon
          cssClass={"bi bi-trash btn btn-outline-danger"}
          onClickAction={() => alert("go delete")}
          param={meal}
        />
        <BootstrapIcon
          cssClass={"bi bi-pencil-square btn btn-success"}
          onClickAction={() => alert("go edit")}
          param={meal.Id}
        />
      </div>
    </div>
  );
}
