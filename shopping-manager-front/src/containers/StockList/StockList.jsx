import s from "./style.module.css";
import { StockListItem } from "../../components/StockListItem/StockListItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  emptySelectStockItem,
  deleteSelectStockItem,
} from "../../store/stock/stock-slice";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

export function StockList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stocks = useSelector((store) => store.STOCK.stocks);
  const selectedStock = useSelector((store) => store.STOCK.stocksSelected);
  const visibility = selectedStock.length === 0 ? false : true;

  function clickStockElement(id) {
    navigate("/stock/" + id);
  }

  useEffect(() => {
    dispatch(emptySelectStockItem());
  }, []);

  function deleteStockSelected() {
    dispatch(deleteSelectStockItem());
  }

  var cssVisibility = visibility ? "visibleDiv" : "hiddenDiv";
  return (
    <>
      {" "}
      {visibility && (
        <div className={cssVisibility}>
          <CustomButton
            labelButton={"Supprimer élément"}
            actionButton={() => deleteStockSelected()}
            customClass="btn btn-danger"
          />
        </div>
      )}
      <div className={`${s.allStocks}`}>
        <div className={`row ${s.headerStockList}`}>
          <div className={`col-2 ${s.cellStockList}`}>ID</div>
          <div className={`col-2 ${s.cellStockList}`}>Nom</div>
          <div className={`col-2 ${s.cellStockList}`}>Type</div>
          <div className={`col-2 ${s.cellStockList}`}>Quantité</div>
          <div className={`col-2 ${s.cellStockList}`}>Status</div>
          <div className={`col-2 ${s.cellStockList}`}>Action</div>
        </div>
        {stocks.map((stock) => {
          return (
            <StockListItem element={stock} clickName={clickStockElement} />
          );
        })}
      </div>
    </>
  );
}
