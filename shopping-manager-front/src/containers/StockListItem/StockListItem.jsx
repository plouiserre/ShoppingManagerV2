import s from "./style.module.css";
import { Pictogramme } from "../../components/Pictogramme/Pictogramme";
import { Status } from "../../components/Status/Status";
import { useDispatch } from "react-redux";
import { deleteStockItem } from "../../store/stock/stock-slice";
import { BootstrapIcon } from "../../components/BootstrapIcon/BootstrapIcon";

export function StockListItem({ element, clickName, goEditPage }) {
  const dispatch = useDispatch();
  const nameFoodClasses = `${s.cellStockList} ${s.nameFood}`;
  const indiceFoodClasses = `${s.cellStockList} ${s.indexFood}`;

  function deleteStock(element) {
    dispatch(deleteStockItem(element));
  }

  return (
    <div className={`row ${s.headerStockList}`}>
      <div className={`col-2 ${indiceFoodClasses}`}>{element.Id}</div>
      <div
        className={`col-2 ${nameFoodClasses}`}
        onClick={() => clickName(element.Id)}
      >
        {element.Name}
      </div>
      <div className={`col-2 ${s.cellStockList}`}>
        <Pictogramme pictoName={element.Type} height={50} width={50} />
      </div>
      <div className={`col-2 ${indiceFoodClasses}`}>{element.Quantity}</div>
      <div className={`col-2 ${s.cellStockList}`}>
        <Status element={element} />
      </div>
      <div className={`col-2 ${s.cellStockList}`}>
        <BootstrapIcon
          cssClass={"bi bi-trash btn btn-outline-danger"}
          onClickAction={deleteStock}
          param={element}
        />
        <BootstrapIcon
          cssClass={"bi bi-pencil-square btn btn-success"}
          onClickAction={goEditPage}
          param={element.Id}
        />
      </div>
    </div>
  );
}
