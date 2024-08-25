import { Status } from "../Status/Status";
import s from "./style.module.css";
import { useState } from "react";
import { BootstrapDropdown } from "../BootstrapDropdown/BootstrapDropdown";
import { useSelector } from "react-redux";
import { CustomButton } from "../CustomButton/CustomButton";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { useDispatch } from "react-redux";
import { deleteMealItems, completeMealItem } from "../../store/meal/meal-slice";
import { LabelTypeStock } from "../LabelTypeStock/LabelTypeStock";

export function MealFormListItem({ mealItemWorking }) {
  const mealItem = { ...mealItemWorking };
  const dispatch = useDispatch();
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
  const [stockWorking, setStockWorking] = useState({});
  const [stockType, setStockType] = useState("");
  const [stocksValue, setStocksValue] = useState(defaultDropdownValue);
  const [errorMessageValue, setErrorMessageValue] = useState("");
  const [errorMessageVisibility, setErrorMessageVisibility] = useState(false);

  function clickDropdownListStock(value) {
    setStocksValue(value);
    stocks.map((stock) => {
      if (stock.Name === value) {
        setStockWorking({ ...stock });
        setStockType(stock.Type);
      }
    });
  }

  function deleteMealItem() {
    dispatch(deleteMealItems(mealItem));
  }

  //TODO externalize in other page
  function ValidateMealItem() {
    if (stockWorking.Name === undefined) {
      setErrorMessageVisibility(true);
      setErrorMessageValue("Merci de choisir un élément du stock");
    } else if (mealItem.quantity <= 0) {
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        "Merci de sélectionner une quantité supérieure à 0 pour " +
          stockWorking.Name
      );
    } else if (stockWorking.Quantity < mealItem.quantity) {
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        stockWorking.Name + " a un stock inférieur à " + mealItem.quantity
      );
    } else {
      setErrorMessageVisibility(false);
      //TODO externalize in a method
      const newMealItem = { ...mealItem };
      newMealItem.stock = stockWorking;
      dispatch(completeMealItem(newMealItem));
    }
  }

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
          {mealItem.stock.Name === undefined && (
            <BootstrapDropdown
              dropdownValues={stocksValue}
              clickDropDownAction={clickDropdownListStock}
              values={stocksName}
            />
          )}
          {mealItem.stock !== undefined &&
            mealItem.stock.Name != undefined &&
            mealItem.stock.Name}
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom}`}
        >
          {(mealItem.stock.Name != undefined || stockType !== "") && (
            <LabelTypeStock foodType={mealItem.stock.Type} />
          )}
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom}`}
        >
          {mealItem.stock.Name === undefined && (
            <input
              type="number"
              defaultValue={mealItem.quantity}
              onChange={(event) => {
                mealItem.quantity = event.target.value;
              }}
              className={`${s.numberQuantityMealItem}`}
            />
          )}

          {mealItem.stock.Name !== undefined && mealItem.quantity}
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.mealItemStatus} ${s.cellMealsSubListbottom}`}
        >
          {(mealItem.stock.Name !== undefined ||
            stockWorking.Name !== undefined) && (
            <Status element={stockWorking} />
          )}
        </div>
        <div
          className={`col-2 ${s.cellMealsSubList} ${s.cellMealsSubListRight} ${s.cellMealsSubListbottom}`}
        >
          {mealItem.stock.Name === undefined && (
            <CustomButton
              labelButton={"Valider élément repas"}
              actionButton={() => ValidateMealItem()}
              customClass={"btn btn-success"}
            />
          )}
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
      {errorMessageVisibility && (
        <ErrorMessage messageError={errorMessageValue} />
      )}
    </>
  );
}
