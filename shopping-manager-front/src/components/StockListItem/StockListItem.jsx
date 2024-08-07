import s from "./style.module.css";
import { Pictogramme } from "../Pictogramme/Pictogramme";
import { Status } from "../Status/Status";
import { useDispatch } from "react-redux";
import { deleteStockItem } from "../../store/stock/stock-slice";

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
        <button
          type="button"
          class={`btn btn-outline-danger ${s.btnaction}`}
          onClick={() => deleteStock(element)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
          </svg>
        </button>
        <button
          type="button"
          class="btn btn-success"
          onClick={() => goEditPage(element.Id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="currentColor"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
