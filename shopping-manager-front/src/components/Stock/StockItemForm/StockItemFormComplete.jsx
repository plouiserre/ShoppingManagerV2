import s from "./style.module.css";
import { CustomButton } from "../../Reusable/CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import {
  deleteStockItem,
  stopCompleteStockItem,
} from "../../../store/stock/stockitem-slice";
import moment from "moment";

export function StockItemFormComplete({ stockItemWorking }) {
  const stockItem = { ...stockItemWorking };

  const displayDate = moment(
    stockItemWorking.DatePeremption,
    "YYYY-MM-DD HH:mm Z"
  ).format("DD-MM-YYYY");

  const dispatch = useDispatch();
  function deleteStockItemAction() {
    dispatch(deleteStockItem(stockItem));
  }

  function editStockItemAction() {
    dispatch(stopCompleteStockItem(stockItem));
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
          {stockItem.Quantity}
        </div>
        <div
          className={`col-2 ${s.cellStockItemsSubList} ${s.cellStockItemsSubListbottom} ${s.cellStockItemsCenter}`}
        >
          {displayDate}
        </div>
        <div
          className={`col-2 ${s.actionsStockItemLittle} ${s.cellStockItemsSubList} ${s.cellStockItemsSubListbottom} ${s.cellStockItemsSubListRight}`}
        >
          <CustomButton
            labelButton={"Edit"}
            actionButton={() => editStockItemAction()}
            customClass={"btn btn-secondary"}
          />
          <CustomButton
            labelButton={"Supprimer"}
            actionButton={() => deleteStockItemAction()}
            customClass={"btn btn-danger"}
          />
        </div>
      </div>
    </>
  );
}
