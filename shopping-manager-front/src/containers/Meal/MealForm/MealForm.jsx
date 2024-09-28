import s from "./style.module.css";
import { CustomButton } from "../../../components/Reusable/CustomButton/CustomButton";
import { BootstrapDropdown } from "../../../components/Reusable/BootstrapDropdown/BootstrapDropdown";
import { useState } from "react";
import { MealFormList } from "../MealFormList/MealFormList";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage } from "../../../components/Global/ErrorMessage/ErrorMessage";
import { addMealItemsEmpty } from "../../../store/meal/mealItem-slice";
import { editMeal, saveMeal } from "../../../store/meal/meal-slice";
import { useNavigate, useParams } from "react-router-dom";

export function MealForm({ actionType }) {
  const dispatch = useDispatch();
  const params = useParams();
  const stocks = useSelector((store) => store.STOCK.stocks);
  const mealsCreated = useSelector((store) => store.MEAL.meals);
  const mealItems = useSelector((store) => store.MEALITEM.mealItems);
  var mealEdit = getMealEdit();
  const mealInit = actionType === "Add" ? {} : mealEdit;
  const [mealWorking, setMealWorking] = useState(mealInit);
  if (mealItems.length === 0) dispatch(addMealItemsEmpty());

  //TODO factoriser ce code!!!
  const stocksName = [];
  const navigate = useNavigate();
  orderedStockName();
  function orderedStockName() {
    stocks.map((stock) => {
      if (checkStatusNotError(stock)) stocksName.push(stock.Name);
    });
  }

  function getMealEdit() {
    var mealEdit = {};
    if (actionType === "Edit") {
      var id = parseInt(params.id);
      mealEdit = mealsCreated.find((item) => item.id === id);
    }
    return mealEdit;
  }

  function checkStatusNotError(stock) {
    var peremtion = new Date(stock.DatePeremption);
    var today = new Date();
    return today < peremtion;
  }

  var defaultDropdownValue = "Sélectionner une valeur";
  const [dropdownValueDays, setDropDownValueDays] = useState(
    getDefaultDropdownValueDay()
  );
  const [dropdownValueMoments, setDropDownValueMoments] = useState(
    getDefaultDropdownValueMoment()
  );
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
  const [errorMessageVisibility, setErrorMessageVisibility] = useState(false);
  const [errorMessageValue, setErrorMessageValue] = useState("");

  function getDefaultDropdownValueDay() {
    return actionType === "Add" ? defaultDropdownValue : mealWorking.Day;
  }

  function getDefaultDropdownValueMoment() {
    return actionType === "Add" ? defaultDropdownValue : mealWorking.Moment;
  }

  function clickDropdownlistDays(value) {
    setDropDownValueDays(value);
    setMealWorking({ ...mealWorking, Day: value });
  }

  function clickDropdownListMoments(value) {
    setDropDownValueMoments(value);
    setMealWorking({ ...mealWorking, Moment: value });
  }

  function addIteration() {
    dispatch(addMealItemsEmpty());
  }

  function saveAllMeal() {
    var isValidate = validateMeal();
    if (isValidate) {
      const newMeal = { ...mealWorking };
      dispatch(saveMeal({ meal: newMeal, mealItems: mealItems }));
      navigate("/meal/");
    }
  }

  function editAllMeal() {
    var isValidate = validateMeal();
    if (isValidate) {
      const newMeal = { ...mealWorking };
      dispatch(editMeal({ meal: newMeal, mealItems: mealItems }));
      navigate("/meal/");
    }
  }

  function validateMeal() {
    if (dropdownValueMoments === defaultDropdownValue) {
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        "Merci de choisir un moment pour l'enregistrement de ce repas"
      );
      return false;
    } else if (dropdownValueDays === defaultDropdownValue) {
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        "Merci de choisir un jour pour l'enregistrement de ce repas"
      );
      return false;
    } else if (
      (mealItems.length === 1 && mealItems[0].statusMeal === "Creation") ||
      mealItems[0].statusMeal === "Edit"
    ) {
      setErrorMessageVisibility(true);
      setErrorMessageValue("Merci d'ajouter des éléments pour ce repas");
      return false;
    } else if (!checkAllMealItemsAreComplete()) {
      setErrorMessageVisibility(true);
      setErrorMessageValue("Certains éléments du repas ne sont pas complets");
      return false;
    } else if (!checkNoneMealCreatedInSamePeriod() && actionType === "Add") {
      setErrorMessageVisibility(true);
      setErrorMessageValue("Un repas existe déjà au même moment");
    } else {
      setErrorMessageVisibility(false);
      setErrorMessageValue("");
      return true;
    }
  }

  function checkNoneMealCreatedInSamePeriod() {
    var mealsSamePeriod = mealsCreated.find(
      (item) =>
        item.Day === dropdownValueDays && item.Moment === dropdownValueMoments
    );
    return mealsSamePeriod === undefined ? true : false;
  }

  function checkAllMealItemsAreComplete() {
    var allAreComplete = true;
    for (var i = 0; i < mealItems.length; i++) {
      const item = mealItems[i];
      if (item.statusMeal === "Creation" || item.statusMeal === "Edit") {
        allAreComplete = false;
        break;
      }
    }
    return allAreComplete;
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
        <MealFormList actionType={actionType} />
        {errorMessageVisibility && (
          <ErrorMessage messageError={errorMessageValue} />
        )}
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
            {actionType === "Add" && (
              <CustomButton
                labelButton={"Enregistrer"}
                actionButton={() => saveAllMeal()}
              />
            )}
            {actionType === "Edit" && (
              <CustomButton
                labelButton={"Mettre à jour"}
                actionButton={() => editAllMeal()}
                customClass={"btn btn-secondary"}
              />
            )}
          </div>
          <div className="col-2"></div>
        </div>
      </form>
    </div>
  );
}
