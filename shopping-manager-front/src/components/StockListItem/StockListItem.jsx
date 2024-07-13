import s from "./style.module.css";
import { Pictogramme } from "../Pictogramme/Pictogramme";
import { useDispatch } from "react-redux";
import { selectStockItem } from "../../store/stock/stock-slice";

export function StockListItem({ element, clickName }) {
  const dispatch = useDispatch();
  const nameFoodClasses = `${s.cellStockList} ${s.nameFood}`;
  const indiceFoodClasses = `${s.cellStockList} ${s.indexFood}`;

  function clickButtonName(actionName) {
    alert("You go to the action of " + actionName);
  }

  function selectStockElement(element) {
    dispatch(selectStockItem(element));
  }

  return (
    <div className={`row ${s.headerStockList}`}>
      <div className={`col-2 ${indiceFoodClasses}`}>{element.Id}</div>
      <div
        className={`col-2 ${nameFoodClasses}`}
        onClick={() => clickName(element.Name)}
      >
        {element.Name}
      </div>
      <div className={`col-2 ${s.cellStockList}`}>
        <Pictogramme pictoName={element.Type} height={50} width={50} />
      </div>
      <div className={`col-2 ${indiceFoodClasses}`}>{element.Quantity}</div>
      <div className={`col-2 ${s.cellStockList}`}>
        <Pictogramme pictoName={element.Status} height={50} width={50} />
      </div>
      <div className={`col-2 ${s.cellStockList}`}>
        <input
          className={`form-check-input ${s.deleteStockItem}`}
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onChange={() => selectStockElement(element)}
        ></input>
      </div>
    </div>
  );
}
