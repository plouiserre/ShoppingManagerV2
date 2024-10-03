import { StockItemForm } from "../StockItemForm/StockItemForm";
import { useSelector } from "react-redux";
import s from "./style.module.css";

//TODO déplacer dans containers
export function StockListForm({ stock, setStock }) {
  //récupérer la liste des stocks
  var stockItems = useSelector((store) => store.STOCKITEM.stockItems);
  //faire la boucle
  //valider que ca marche
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
        return (
          <StockItemForm
            stockItem={stockItem}
            stock={stock}
            setStock={setStock}
          />
        );
      })}
      ;
    </div>
  );
}
