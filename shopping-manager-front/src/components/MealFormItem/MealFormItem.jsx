import { Status } from "../Status/Status";
import s from "./style.module.css";
import { useState } from "react";
import { BootstrapDropdown } from "../BootstrapDropdown/BootstrapDropdown";
import { useSelector } from "react-redux";
import { CustomButton } from "../CustomButton/CustomButton";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export function MealFormItem({ idMealItem }) {
  var defaultDropdownValue = "Sélectionner une valeur";
  const stocks = useSelector((store) => store.STOCK.stocks);
  const stocksName = [];
  orderedStockName();
  function orderedStockName() {
    stocks.map((stock) => {
      stocksName.push(stock.Name);
    });
  }
  const [mealItem, setMealItem] = useState({
    type: "",
    quantity: 0,
    status: "",
    stock: {},
  });

  //TODO delete by mealitem useState
  const [typeStock, setTypeStock] = useState("Type");
  const [stockSelected, setStockSelected] = useState([]);
  const [visibilityStatus, setVisibilityStatus] = useState(false);
  const [stocksValue, setStocksValue] = useState(defaultDropdownValue);
  const [errorMessageValue, setErrorMessageValue] = useState("");
  const [errorMessageVisibility, setErrorMessageVisibility] = useState(false);

  function clickDropdownListStock(value) {
    setStocksValue(value);
    stocks.map((stock) => {
      if (stock.Name === value) {
        setMealItem({ ...mealItem, stock: stock });
      }
    });

    for (var i = 0; i < stocks.length; i++) {
      if (stocks[i].Name === value) {
        var stockType = getType(stocks[i].Type);
        setTypeStock(stockType);
        setStockSelected(stocks[i]);
        setVisibilityStatus(true);
        break;
      }
    }
  }

  //TODO factorize with the method in stockEdit.jsx
  function getType(typeName) {
    if (typeName === "meat") return "Viande";
    else if (typeName === "vegetables") return "Légumes";
    else return "Petit déjeuner";
  }

  function ValidateMealItem() {
    if (mealItem.stock.Name == undefined) {
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
    }
  }

  return (
    <>
      <div className="row">
        <div className={`col-3`}></div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom}`}
        >
          {idMealItem}
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
          {typeStock}
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom}`}
        >
          <input
            type="number"
            defaultValue={mealItem.quantity}
            onChange={(event) => {
              setMealItem({ ...mealItem, quantity: event.target.value });
            }}
            className={`${s.numberQuantityMealItem}`}
          />
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.mealItemStatus} ${s.cellMealsSubListbottom}`}
        >
          {visibilityStatus && <Status element={stockSelected} />}
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
