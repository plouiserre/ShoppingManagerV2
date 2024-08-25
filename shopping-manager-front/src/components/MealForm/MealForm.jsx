import s from "./style.module.css";
import { CustomButton } from "../CustomButton/CustomButton";
import { BootstrapDropdown } from "../BootstrapDropdown/BootstrapDropdown";
import { useState } from "react";
import { MealFormList } from "../MealFormList/MealFormList";
import { useDispatch, useSelector } from "react-redux";
import { addMealItemsEmpty } from "../../store/meal/meal-slice";

//TODO move in container
export function MealForm({ meal, setMeal }) {
  const dispatch = useDispatch();
  const stocks = useSelector((store) => store.STOCK.stocks);
  const mealItems = useSelector((store) => store.MEAL.mealItems);
  if (mealItems.length === 0) dispatch(addMealItemsEmpty());

  //TODO factoriser ce code!!!
  const stocksName = [];
  orderedStockName();
  function orderedStockName() {
    stocks.map((stock) => {
      if (checkStatusNotError(stock)) stocksName.push(stock.Name);
    });
  }

  function checkStatusNotError(stock) {
    var peremtion = new Date(stock.DatePeremption);
    var today = new Date();
    return today < peremtion;
  }

  var defaultDropdownValue = "Sélectionner une valeur";
  const [dropdownValueDays, setDropDownValueDays] =
    useState(defaultDropdownValue);
  const [dropdownValueMoments, setDropDownValueMoments] =
    useState(defaultDropdownValue);
  const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  const moments = ["Petit-déjeuner", "Déjeuner", "Goûter", "Dîner"];
  const [iteration, setIteration] = useState(2);
  function clickDropdownlistDays(value) {
    setDropDownValueDays(value);
    setMeal({ ...meal, Day: value });
  }

  function clickDropdownListMoments(value) {
    setDropDownValueMoments(value);
    setMeal({ ...meal, Moment: value });
  }

  function addIteration() {
    dispatch(addMealItemsEmpty());
  }

  function saveMeal() {
    //dispatch(addmealItems(meal));
    alert("lol");
  }

  return (
    <div>
      <form className={`container-fluid ${s.formStock}`}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-7">
            <h1 className={`${s.titleForm}`}>Nouveau repas</h1>
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-3">Jour</div>
          <div className="col-4">
            <BootstrapDropdown
              dropdownValues={dropdownValueDays}
              clickDropDownAction={clickDropdownlistDays}
              values={days}
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-3">Moment</div>
          <div className="col-4">
            <BootstrapDropdown
              dropdownValues={dropdownValueMoments}
              clickDropDownAction={clickDropdownListMoments}
              values={moments}
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`${s.mealsSub}`}>
          <div className={`row ${s.headerMealsSubList}`}>
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
          <MealFormList iteration={iteration} />
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-7">
            <CustomButton
              labelButton={"Nouvel élément repas"}
              actionButton={() => addIteration()}
              customClass={"btn btn-info"}
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-7">
            <CustomButton
              labelButton={"Enregistrer"}
              actionButton={() => saveMeal()}
            />
          </div>
          <div className="col-2"></div>
        </div>
      </form>
    </div>
  );
}
