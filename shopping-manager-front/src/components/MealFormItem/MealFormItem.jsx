import { Status } from "../Status/Status";
import s from "./style.module.css";
import { useState } from "react";
import { BootstrapDropdown } from "../BootstrapDropdown/BootstrapDropdown";
import { useSelector } from "react-redux";
import { CustomButton } from "../CustomButton/CustomButton";

export function MealFormItem() {
  var defaultDropdownValue = "Sélectionner une valeur";
  const stocks = useSelector((store) => store.STOCK.stocks);
  const stocksName = [];
  orderedStockName();
  function orderedStockName() {
    stocks.map((stock) => {
      stocksName.push(stock.Name);
    });
  }
  const [typeStock, setTypeStock] = useState("Type");
  const [quantityMealItem, setQuantityMealItem] = useState(0);
  const [stockSelected, setStockSelected] = useState([]);
  const [visibilityStatus, setVisibilityStatus] = useState(false);
  const [stocksValue, setStocksValue] = useState(defaultDropdownValue);

  function clickDropdownListStock(value) {
    setStocksValue(value);
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

  return (
    <div className="row">
      <div className={`col-3`}></div>
      <div
        className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom}`}
      >
        1
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
          defaultValue={quantityMealItem}
          onChange={(quantity) => {
            setQuantityMealItem(quantity);
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
          actionButton={() => alert("validation")}
          customClass={"btn btn-success"}
        />
      </div>
      <div className={`col-2`}></div>
    </div>
  );
}
