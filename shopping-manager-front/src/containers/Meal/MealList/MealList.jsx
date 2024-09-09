import { MealListItem } from "../../MealListItem/MealListItem";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import { CustomButton } from "../../../components/Reusable/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

export function MealList() {
  const navigate = useNavigate();
  const meals = useSelector((store) => store.MEAL.meals);
  const mealsToOrdered = [...meals];
  const mealsOrdered = mealsToOrdered.sort((mealFirst, mealSecond) => {
    return mealFirst.DayMomentValue - mealSecond.DayMomentValue;
  });
  function goMealDetail(id) {
    navigate("/Meal/" + id);
  }

  return (
    <>
      <div className={`${s.allMeals}`}>
        <div className={`row ${s.headerMealList}`}>
          <div className={`col-3 ${s.cellMealList}`}>Nom du repas</div>
          <div className={`col-3 ${s.cellMealList}`}>Numéro élément</div>
          <div className={`col-3 ${s.cellMealList}`}>Status</div>
          <div className={`col-3 ${s.cellMealList}`}>Actions</div>
        </div>
        {mealsOrdered.map((meal) => {
          return (
            <MealListItem meal={meal} key={meal.id} clickPage={goMealDetail} />
          );
        })}
      </div>
      <div class="row">
        <div class="col-4">
          <CustomButton
            labelButton={"Ajouter un nouvel élément"}
            actionButton={() => navigate("/meal/add/")}
          />
        </div>
        <div class="col-8" />
      </div>
    </>
  );
}
