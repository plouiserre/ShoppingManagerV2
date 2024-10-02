import { BootstrapIcon } from "../../../components/Reusable/BootstrapIcon/BootstrapIcon";
import { Pictogramme } from "../../../components/Reusable/Pictogramme/Pictogramme";
import s from "./style.module.css";
import { MealDayMoment } from "../../../components/Meal/MealDayMoment/MealDayMoment";
import { deleteMeal } from "../../../store/meal/meal-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function MealListItem({ meal, clickPage }) {
  var dispatch = useDispatch();
  var navigate = useNavigate();
  function deleteMealFromList() {
    dispatch(deleteMeal(meal));
  }

  function editMeal() {
    navigate("/meal/edit/" + meal.id);
  }
  return (
    <div className={`row ${s.cellMealList}`}>
      <div className={`col-3 ${s.idMeal}`} onClick={() => clickPage(meal.id)}>
        <MealDayMoment meal={meal} />
      </div>
      <div className={`col-3 ${s.quantityItems}`}>{meal.mealItems.length}</div>
      <div className={`col-2 ${s.statusMeal}`}>
        <Pictogramme pictoName="ok" height={50} width={50} />{" "}
      </div>
      <div className={`col-3 ${s.actionMeal}`}>
        <BootstrapIcon
          cssClass={"bi bi-trash btn btn-outline-danger"}
          onClickAction={() => deleteMealFromList()}
          param={meal}
        />
        <BootstrapIcon
          cssClass={"bi bi-pencil-square btn btn-success"}
          onClickAction={() => editMeal()}
          param={meal.Id}
        />
      </div>
    </div>
  );
}
