import s from "./style.module.css";
import { Pictogramme } from "../Pictogramme/Pictogramme";
import { Status } from "../Status/Status";
import { useDispatch } from "react-redux";
import {
  selectStockItem,
  deselectStockItem,
} from "../../store/stock/stock-slice";

export function StockListItem({ element, clickName }) {
  const dispatch = useDispatch();
  const nameFoodClasses = `${s.cellStockList} ${s.nameFood}`;
  const indiceFoodClasses = `${s.cellStockList} ${s.indexFood}`;

  function selectStockElement(stockElement, element) {
    var isChecked = element.target.checked;
    if (isChecked) dispatch(selectStockItem(stockElement));
    else dispatch(deselectStockItem(stockElement));
  }

  return (
    <div
      className={`row ${s.headerStockList}`}
      onClick={() => clickName(element.Id)}
    >
      <div className={`col-2 ${indiceFoodClasses}`}>{element.Id}</div>
      <div className={`col-2 ${nameFoodClasses}`}>{element.Name}</div>
      <div className={`col-2 ${s.cellStockList}`}>
        <Pictogramme pictoName={element.Type} height={50} width={50} />
      </div>
      <div className={`col-2 ${indiceFoodClasses}`}>{element.Quantity}</div>
      <div className={`col-2 ${s.cellStockList}`}>
        <Status element={element} />
      </div>
      <div className={`col-2 ${s.cellStockList}`}>
        <input
          className={`form-check-input ${s.deleteStockItem}`}
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onChange={(e) => selectStockElement(element, e)}
        ></input>
      </div>
    </div>
  );
}
