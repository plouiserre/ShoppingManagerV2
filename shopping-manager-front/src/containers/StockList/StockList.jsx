import s from "./style.module.css";
import { StockListItem } from "../../components/StockListItem/StockListItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptySelectStockItem } from "../../store/stock/stock-slice";
import { Pictogramme } from "../../components/Pictogramme/Pictogramme";
import { useNavigate } from "react-router-dom";

export function StockList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stocks = useSelector((store) => store.STOCK.stocks);

  function clickStockElement(id) {
    navigate("/stock/" + id);
  }

  useEffect(() => {
    dispatch(emptySelectStockItem());
  }, []);

  return (
    <>
      {" "}
      <div>
        <Pictogramme pictoName="delete" height={50} width={50} />
      </div>
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
