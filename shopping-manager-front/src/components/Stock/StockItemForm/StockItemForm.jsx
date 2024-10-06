import s from "./style.module.css";
import { CustomButton } from "../../Reusable/CustomButton/CustomButton";
import {
  completeStockItem,
  deleteStockItem,
} from "../../../store/stock/stockitem-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ErrorMessage } from "../../Global/ErrorMessage/ErrorMessage";

//TODO externalize in containers folder
export function StockItemForm({ stockItemWorking }) {
  const [errorMessageVisibility, setErrorMessageVisibility] = useState(false);
  const [errorMessageValue, setErrorMessageValue] = useState("");
  var stockItem = { ...stockItemWorking };
  const defaultDisplayDate = stockItem.DatePeremption.split("T")[0];
  var dispatch = useDispatch();

  function deleteStockItemAction() {
    dispatch(deleteStockItem(stockItem));
  }

  function validateStockItem() {
    const datePeremption = new Date(stockItem.DatePeremption);
    if (stockItem.Quantity === 0) {
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        "Merci de mettre une quantité à cet élément de stock"
      );
    } else if (datePeremption < getEndDay()) {
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        "Merci de mettre une date de péremption supérieur à aujourd'hui"
      );
    } else {
      dispatch(completeStockItem(stockItem));
    }
  }

  function getEndDay() {
    var endDay = new Date();
    endDay.setUTCHours(23, 59, 59, 999);
    return endDay;
  }

  return (
    <>
      <div className={`row`}>
        <div className={`col-3`}></div>
        <div
          className={`col-1 ${s.cellStockItemsSubList} ${s.cellStockItemsSubListbottom} ${s.cellStockItemsCenter}`}
        >
          {stockItem.Id}
        </div>
        <div
          className={`col-2 ${s.cellStockItemsSubList} ${s.cellStockItemsSubListbottom} ${s.cellStockItemsCenter}`}
        >
          {" "}
          <input
            type="number"
            defaultValue={stockItem.Quantity}
            className="form-control"
            onChange={(event) => {
              stockItem.Quantity = event.target.value;
            }}
          />
        </div>
        <div
          className={`col-2 ${s.cellStockItemsSubList} ${s.cellStockItemsSubListbottom} ${s.cellStockItemsCenter}`}
        >
          <input
            type="date"
            defaultValue={defaultDisplayDate}
            onChange={(event) => {
              stockItem.DatePeremption = event.target.value;
            }}
            className="form-control"
          />
        </div>
        <div
          className={`col-2 ${s.actionsStockItemLittle} ${s.cellStockItemsSubList} ${s.cellStockItemsSubListbottom} ${s.cellStockItemsSubListRight}`}
        >
          <CustomButton
            labelButton={"Valider"}
            actionButton={() => validateStockItem()}
            customClass={"btn btn-success"}
          />
          <CustomButton
            labelButton={"Supprimer"}
            actionButton={() => deleteStockItemAction()}
            customClass={"btn btn-danger"}
          />
        </div>
      </div>
      {errorMessageVisibility && (
        <ErrorMessage messageError={errorMessageValue} />
      )}
    </>
  );
}
