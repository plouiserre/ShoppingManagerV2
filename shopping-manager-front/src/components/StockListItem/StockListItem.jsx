import s from "./style.module.css";
import { Pictogramme } from "../Pictogramme/Pictogramme";

export function StockListItem({ element }) {
  const nameFoodClasses = `${s.cellStockList} ${s.nameFood}`;
  const indiceFoodClasses = `${s.cellStockList} ${s.indexFood}`;
  const darkrow =
    element.Id % 2 == 0
      ? `${s.headerStockList}`
      : `${s.headerStockList} ${s.darkrow}`;
  return (
    <div className={`row ${darkrow}`}>
      <div className={`col-2 ${indiceFoodClasses}`}>{element.Id}</div>
      <div className={`col-2 ${nameFoodClasses}`}>{element.Name}</div>
      <div className={`col-2 ${s.cellStockList}`}>
        <Pictogramme pictoName={element.Type} height={50} width={50} />
      </div>
      <div className={`col-2 ${indiceFoodClasses}`}>{element.Quantity}</div>
      <div className={`col-2 ${s.cellStockList}`}>
        <Pictogramme pictoName={element.Status} height={50} width={50} />
      </div>
      <div className={`col-2 ${s.cellStockList}`}>
        <Pictogramme pictoName={"sup"} height={50} width={50} />
        <Pictogramme pictoName={"edit"} height={50} width={50} />
      </div>
    </div>
  );
}
