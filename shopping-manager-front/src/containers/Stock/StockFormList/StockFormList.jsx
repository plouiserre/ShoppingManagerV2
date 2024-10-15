import { StockItemForm } from "../StockItemForm/StockItemForm";
import { StockItemFormComplete } from "../StockItemForm/StockItemFormComplete";
import { useSelector } from "react-redux";
import s from "./style.module.css";

//TODO déplacer dans containers
export function StockFormList({ stock }) {
  var stockItems = useSelector((store) => store.STOCKITEM.stockItems);
  return (
    <div className={`${s.stocksSub}`}>
      <div className={`row`}>
        <div className={`col-3`}></div>
        <div
          className={`col-1 ${s.cellStocksSubList} ${s.cellStocksSubListDarkBackgroundColor}`}
        >
          ID
        </div>
        <div
          className={`col-2 ${s.cellStocksSubList} ${s.cellStocksSubListDarkBackgroundColor}`}
        >
          Quantité
        </div>
        <div
          className={`col-2 ${s.cellStocksSubList} ${s.cellStocksSubListDarkBackgroundColor}`}
        >
          Date d'expiration
        </div>
        <div
          className={`col-2 ${s.cellStocksSubList} ${s.cellStocksSubListRight} ${s.cellStocksSubListDarkBackgroundColor}`}
        >
          Actions
        </div>
        <div className={`col-2`}></div>
      </div>
      {stockItems.map((stockItem) => {
        if (stockItem.statusStockItem !== "Validation") {
          return <StockItemForm stockItemWorking={stockItem} stock={stock} />;
        } else {
          return <StockItemFormComplete stockItemWorking={stockItem} />;
        }
      })}
      ;
    </div>
  );
}
