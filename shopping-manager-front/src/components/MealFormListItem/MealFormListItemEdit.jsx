import { Status } from "../Status/Status";
import s from "./style.module.css";
import { useState } from "react";
import { BootstrapDropdown } from "../BootstrapDropdown/BootstrapDropdown";
import { useSelector } from "react-redux";
import { CustomButton } from "../CustomButton/CustomButton";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { useDispatch } from "react-redux";
import { completeMealItem } from "../../store/meal/meal-slice";
import { LabelTypeStock } from "../LabelTypeStock/LabelTypeStock";

//Todo centralize all code for edit view
export function MealFormListItemEdit({ mealItemWorking }) {
  const mealItem = { ...mealItemWorking };
  var dispatch = useDispatch();
  var defaultDropdownValue = mealItem.stock.Name;
  const [stocksValue, setStocksValue] = useState(defaultDropdownValue);
  const stocks = useSelector((store) => store.STOCK.stocks);
  const stocksName = [];
  orderedStockName();
  function orderedStockName() {
    stocks.map((stock) => {
      if (checkStatusNotError(stock)) stocksName.push(stock.Name);
    });
  }

  const [stockType, setStockType] = useState(mealItem.stock.Type);
  const [errorMessageVisibility, setErrorMessageVisibility] = useState(false);
  const [errorMessageValue, setErrorMessageValue] = useState("");

  //TODO check if it is useful
  const [stockWorking, setStockWorking] = useState({});

  function checkStatusNotError(stock) {
    var peremtion = new Date(stock.DatePeremption);
    var today = new Date();
    return today < peremtion;
  }
  function clickDropdownListStock(value) {
    setStocksValue(value);
    stocks.map((stock) => {
      if (stock.Name === value) {
        setStockWorking({ ...stock });
        setStockType(stock.Type);
      }
    });
  }
  function ValidateMealItem() {
    if (stockWorking.Name === undefined && mealItem.stock.Name === undefined) {
      setErrorMessageVisibility(true);
      setErrorMessageValue("Merci de choisir un élément du stock");
    } else if (mealItem.quantity <= 0) {
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        "Merci de sélectionner une quantité supérieure à 0 pour " +
          stockWorking.Name
      );
    } else if (mealItem.stock.Quantity < mealItem.quantity) {
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        mealItem.stock.Name + " a un stock inférieur à " + mealItem.quantity
      );
    } else {
      setErrorMessageVisibility(false);
      //TODO externalize in a method
      const newMealItem = { ...mealItem };
      if (stockWorking.Name !== undefined) newMealItem.stock = stockWorking;
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
          <BootstrapDropdown
            dropdownValues={stocksValue}
            clickDropDownAction={clickDropdownListStock}
            values={stocksName}
          />
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom}`}
        >
          <LabelTypeStock foodType={stockType} />
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom}`}
        >
          <input
            type="number"
            defaultValue={mealItem.quantity}
            onChange={(event) => {
              mealItem.quantity = event.target.value;
            }}
            className={`${s.numberQuantityMealItem}`}
          />
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.mealItemStatus} ${s.cellMealsSubListbottom}`}
        >
          <Status element={stockWorking} />
        </div>
        <div
          className={`col-2 ${s.cellMealsSubList} ${s.cellMealsSubListRight} ${s.cellMealsSubListbottom}`}
        >
          <CustomButton
            labelButton={"Valider élément repas"}
            actionButton={() => ValidateMealItem()}
            customClass={"btn btn-success"}
          />
        </div>
        <div className={`col-2`}></div>
      </div>
      {errorMessageVisibility && (
        <ErrorMessage messageError={errorMessageValue} />
      )}
    </>
  );
}
