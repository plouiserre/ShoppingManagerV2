import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { StockForm } from "../../containers/Stock/StockForm/StockForm";
import { getTypeFoodLabel } from "../../domain/manageFoodType";
import {
  flushStockItem,
  storeEditStockItems,
} from "../../store/stock/stockitem-slice";

//TODO factorize with AddStock
export function EditStock() {
  const params = useParams();
  const dispatch = useDispatch();
  dispatch(flushStockItem());

  const id = parseInt(params.id);
  var stocks = useSelector((store) => store.STOCK.stocks);
  var stockBdd = stocks.find((item) => item.Id === id);

  const [stock, setStock] = useState(stockBdd);
  dispatch(storeEditStockItems(stockBdd));
  return (
    <StockForm
      stock={stock}
      setStock={setStock}
      defaultValueTypeStock={getTypeFoodLabel(stock.Type)}
    />
  );
}
