import s from "./style.module.css";
import { Pictogramme } from "../Pictogramme/Pictogramme";
import { Status } from "../Status/Status";
import { useDispatch } from "react-redux";
import { deleteStockItem } from "../../store/stock/stock-slice";
import { CustomButton } from "../../components/CustomButton/CustomButton";

export function StockListItem({ element, clickName }) {
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
      {/* <div className={`col-2 ${s.cellStockList}`}>
        <input
          className={`form-check-input ${s.deleteStockItem}`}
          type="checkbox"
          value=""
          checked={selected}
          id="flexCheckDefault"
          onChange={(e) => selectStockElement(element, e)}
        ></input>
      </div> */}
      <div className={`col-2 ${s.cellStockList}`}>
        <CustomButton
          labelButton={"Supprimer élément"}
          actionButton={() => deleteStock(element)}
          customClass="btn btn-danger"
        />
      </div>
    </div>
  );
}
