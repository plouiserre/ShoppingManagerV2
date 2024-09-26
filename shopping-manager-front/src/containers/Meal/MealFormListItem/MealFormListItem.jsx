import { Status } from "../../../components/Reusable/Status/Status";
import s from "./style.module.css";
import { useState } from "react";
import { BootstrapDropdown } from "../../../components/Reusable/BootstrapDropdown/BootstrapDropdown";
import { useSelector } from "react-redux";
import { CustomButton } from "../../../components/Reusable/CustomButton/CustomButton";
import { ErrorMessage } from "../../../components/Global/ErrorMessage/ErrorMessage";
import { useDispatch } from "react-redux";
import {
  completeMealItemExistingMeal,
  completeMealItemNewMeal,
  deleteMealItems,
} from "../../../store/meal/mealItem-slice";
import { getTypeFoodLabel } from "../../../domain/manageFoodType";

export function MealFormListItem({ mealItemWorking, actionType }) {
  const mealItem = { ...mealItemWorking };
  const isEditing = mealItem.stock.Name !== undefined ? true : false;
  const dispatch = useDispatch();
  var defaultDropdownValue = isEditing
    ? mealItem.stock.Name
    : "Sélectionner une valeur";
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
  const defaultStockType = isEditing ? mealItem.stock.Type : "";
  const [stockType, setStockType] = useState(defaultStockType);
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

  //TODO externalize in other page
  function ValidateMealItem() {
    const stockQuantity =
      isEditing && stockWorking.Name === undefined
        ? parseInt(mealItem.stock.Quantity)
        : parseInt(stockWorking.Quantity);
    const mealItemQuantity = parseInt(mealItem.quantity);
    if (stockWorking.Name === undefined && mealItem.stock.Name === undefined) {
      setErrorMessageVisibility(true);
      setErrorMessageValue("Merci de choisir un élément du stock");
    } else if (mealItem.quantity <= 0) {
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        "Merci de sélectionner une quantité supérieure à 0 pour " +
          stockWorking.Name
      );
    } else if (stockQuantity < mealItemQuantity) {
      const stockName = isEditing ? mealItem.stock.Name : stockWorking.Name;
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        stockName + " a un stock inférieur à " + mealItem.quantity
      );
    } else {
      setErrorMessageVisibility(false);
      const newMealItem = { ...mealItem };
      if (stockWorking.Name !== undefined) newMealItem.stock = stockWorking;
      if (actionType == "Add") {
        dispatch(completeMealItemNewMeal(newMealItem));
      } else if (actionType == "Edit") {
        dispatch(completeMealItemExistingMeal(newMealItem));
      }
    }
  }

  function deleteEmptyLine() {
    dispatch(deleteMealItems(mealItem));
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
          {stockType !== ""
            ? getTypeFoodLabel(stockType)
            : mealItem.stock.Type !== undefined &&
              getTypeFoodLabel(mealItem.stock.Type)}
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
          {stockWorking.Name !== undefined ? (
            <Status element={stockWorking} />
          ) : (
            <Status element={mealItem.stock} />
          )}
        </div>
        <div
          className={`col-2 ${s.cellMealsSubList} ${s.cellMealsSubListRight} ${s.cellMealsSubListbottom}`}
        >
          <div className={`${s.actionsMealsLittle}`}>
            <CustomButton
              labelButton={"Valider"}
              actionButton={() => ValidateMealItem()}
              customClass={"btn btn-success"}
            />
            <CustomButton
              labelButton={"Supprimer"}
              actionButton={() => deleteEmptyLine()}
              customClass={"btn btn-danger"}
            />
          </div>
        </div>
        <div className={`col-2`}></div>
      </div>
      {errorMessageVisibility && (
        <ErrorMessage messageError={errorMessageValue} />
      )}
    </>
  );
}
