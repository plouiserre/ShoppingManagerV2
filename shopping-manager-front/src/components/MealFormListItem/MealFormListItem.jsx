import { Status } from "../Status/Status";
import s from "./style.module.css";
import { useState } from "react";
import { BootstrapDropdown } from "../BootstrapDropdown/BootstrapDropdown";
import { useSelector } from "react-redux";
import { CustomButton } from "../CustomButton/CustomButton";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export function MealFormListItem({ mealItem }) {
  var defaultDropdownValue = "Sélectionner une valeur";
  const stocks = useSelector((store) => store.STOCK.stocks);
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

  const [visibilityStatus, setVisibilityStatus] = useState(false);
  const [stocksValue, setStocksValue] = useState(defaultDropdownValue);
  const [errorMessageValue, setErrorMessageValue] = useState("");
  const [errorMessageVisibility, setErrorMessageVisibility] = useState(false);
  const [visibilityValidation, setVisibilityValidation] = useState(false);
  const [isActivated, setIsActivated] = useState(true);

  function clickDropdownListStock(value) {
    setStocksValue(value);
    stocks.map((stock) => {
      if (stock.Name === value) {
        mealItem.stock = stock;
        mealItem.stock.Type = getType(mealItem.stock.Type);
        setVisibilityStatus(true);
      }
    });
  }

  //TODO factorize with the method in stockEdit.jsx
  function getType(typeName) {
    if (typeName === "meat") return "Viande";
    else if (typeName === "vegetables") return "Légumes";
    else return "Petit déjeuner";
  }

  function ValidateMealItem() {
    if (mealItem.stock.Name === undefined) {
      setErrorMessageVisibility(true);
      setErrorMessageValue("Merci de choisir un élément du stock");
    } else if (mealItem.quantity <= 0) {
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        "Merci de sélectionner une quantité supérieure à 0 pour " +
          mealItem.stock.Name
      );
    } else if (mealItem.stock.Quantity < mealItem.quantity) {
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        mealItem.stock.Name + " a un stock inférieur à " + mealItem.quantity
      );
    } else {
      setErrorMessageVisibility(false);
      setVisibilityValidation(true);
    }
  }

  return (
    <>
      {isActivated && (
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
            {!visibilityValidation && (
              <BootstrapDropdown
                dropdownValues={stocksValue}
                clickDropDownAction={clickDropdownListStock}
                values={stocksName}
              />
            )}
            {visibilityValidation && mealItem.stock.Name}
          </div>
          <div
            className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom}`}
          >
            {mealItem.stock.Type}
          </div>
          <div
            className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom}`}
          >
            {!visibilityValidation && (
              <input
                type="number"
                defaultValue={mealItem.quantity}
                onChange={(event) => {
                  mealItem.quantity = event.target.value;
                }}
                className={`${s.numberQuantityMealItem}`}
              />
            )}

            {visibilityValidation && mealItem.quantity}
          </div>
          <div
            className={`col-1 ${s.cellMealsSubList} ${s.mealItemStatus} ${s.cellMealsSubListbottom}`}
          >
            {visibilityStatus && <Status element={mealItem.stock} />}
          </div>
          <div
            className={`col-2 ${s.cellMealsSubList} ${s.cellMealsSubListRight} ${s.cellMealsSubListbottom}`}
          >
            {!visibilityValidation && (
              <CustomButton
                labelButton={"Valider élément repas"}
                actionButton={() => ValidateMealItem()}
                customClass={"btn btn-success"}
              />
            )}
            {visibilityValidation && (
              <div className={`${s.actionsMeals}`}>
                <CustomButton
                  labelButton={"Edit"}
                  actionButton={() => setVisibilityValidation(false)}
                  customClass={"btn btn-secondary"}
                />
                <CustomButton
                  labelButton={"Supprimer"}
                  actionButton={() => setIsActivated(false)}
                  customClass={"btn btn-danger"}
                />
              </div>
            )}
          </div>
          <div className={`col-2`}></div>
        </div>
      )}
      {errorMessageVisibility && (
        <ErrorMessage messageError={errorMessageValue} />
      )}
    </>
  );
}
