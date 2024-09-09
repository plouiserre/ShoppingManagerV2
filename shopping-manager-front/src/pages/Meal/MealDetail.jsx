import s from "./style.module.css";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { DayMomentMeal } from "../../components/Meal/DayMomentMeal/DayMomentMeal";
import { MealItemList } from "../../components/Meal/MealItemList/MealItemList";
import { CustomButton } from "../../components/Reusable/CustomButton/CustomButton";

export function MealDetail() {
  var params = useParams();
  var id = parseInt(params.id);
  var mealDetail = LoadDetail(id);
  const navigate = useNavigate();

  function LoadDetail(id) {
    const meals = useSelector((store) => store.MEAL.meals);
    return meals.find((item) => item.id === id);
  }

  function UpdateMeal() {
    navigate("/Meal/edit/" + id);
  }

  function GoMealList() {
    navigate("/Meal/");
  }

  //récupérer le bon meal
  return (
    <div className={`container-fluid`}>
      <div className={`row ${s.detailMeal} ${s.titleDetailMeal}`}>
        <div className={`col-12`}>
          <DayMomentMeal meal={mealDetail} />
        </div>
      </div>
      <div className={`row ${s.headerMealItems}`}>
        <div className={`col-3`}>Nom</div>
        <div className={`col-3`}>Type</div>
        <div className={`col-3`}>Quantité</div>
        <div className={`col-3`}>Status</div>
      </div>
      <MealItemList mealItems={mealDetail.mealItems} />
      <div className="row">
        <div className={`col-3 ${s.globalButton}`}>
          <CustomButton
            labelButton={"Liste des repas"}
            actionButton={GoMealList}
            customClass={"btn btn-secondary btn-lg w-100"}
          />
        </div>
        <div class="col-6"></div>
        <div className={`col-3 ${s.globalButton}`}>
          <CustomButton
            labelButton={"Mettre à jour ce repas"}
            actionButton={UpdateMeal}
            customClass={"btn btn-primary btn-lg w-100"}
          />
        </div>
      </div>
    </div>
  );
}
