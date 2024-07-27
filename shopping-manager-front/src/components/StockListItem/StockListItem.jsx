import s from "./style.module.css";
import { Pictogramme } from "../Pictogramme/Pictogramme";
import { useDispatch } from "react-redux";
import {
  selectStockItem,
  deselectStockItem,
} from "../../store/stock/stock-slice";
import { useEffect, useState } from "react";

export function StockListItem({ element, clickName }) {
  const [status, setStatus] = useState();
  const dispatch = useDispatch();
  const nameFoodClasses = `${s.cellStockList} ${s.nameFood}`;
  const indiceFoodClasses = `${s.cellStockList} ${s.indexFood}`;

  useEffect(() => {
    var peremtion = new Date(element.DatePeremption);
    var today = new Date();
    if (peremtion < today) {
      setStatus("error");
    } else {
      var diffTime = Math.abs(peremtion - today);
      var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays < 2) setStatus("warning");
      else setStatus("ok");
    }
  }, [element]);

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
        <Pictogramme pictoName={status} height={50} width={50} />
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
