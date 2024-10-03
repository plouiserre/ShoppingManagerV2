import s from "./style.module.css";
import { CustomButton } from "../../Reusable/CustomButton/CustomButton";
export function StockItemForm({ stock, setStock, stockItem }) {
  return (
    <>
      <div className={`row`}>
        <div className={`col-3`}></div>
        <div
          className={`col-1 ${s.cellStockItemsSubList} ${s.cellStockItemsSubListbottom}`}
        >
          1
        </div>
        <div
          className={`col-2 ${s.cellStockItemsSubList} ${s.cellStockItemsSubListbottom}`}
        >
          {" "}
          <input
            type="number"
            className="form-control"
            value={stock.Quantity}
            onChange={(event) => {
              setStock({ ...stock, Quantity: event.target.value });
            }}
          />
        </div>
        <div
          className={`col-2 ${s.cellStockItemsSubList} ${s.cellStockItemsSubListbottom}`}
        >
          <input
            type="date"
            value={stock.DatePeremption}
            onChange={(event) => {
              setStock({
                ...stock,
                DatePeremption: event.target.value,
                IsDateSelected: true,
              });
            }}
            className="form-control"
          />
        </div>
        <div
          className={`col-2 ${s.actionsStockItemLittle} ${s.cellStockItemsSubList} ${s.cellStockItemsSubListbottom} ${s.cellStockItemsSubListRight}`}
        >
          <CustomButton
            labelButton={"Valider"}
            actionButton={() => alert("validation baby")}
            customClass={"btn btn-success"}
          />
          <CustomButton
            labelButton={"Supprimer"}
            actionButton={() => alert("delete baby")}
            customClass={"btn btn-danger"}
          />
        </div>
      </div>
    </>
  );
}
