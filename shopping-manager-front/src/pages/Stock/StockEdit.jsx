import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { StockForm } from "../../components/Stock/StockForm/StockForm";
import { getTypeFoodId, getTypeFoodLabel } from "../../domain/manageFoodType";

//TODO factorize with AddStock
export function StockEdit() {
  const params = useParams();

  const id = parseInt(params.id);
  var stockLoad = LoadDetail();
  var stockBdd = stockLoad[0];

  function LoadDetail() {
    var stocks = useSelector((store) => store.STOCK.stocks);
    return stocks.filter((item) => item.Id === id);
  }
  const [stock, setStock] = useState(stockBdd);

  return (
    <StockForm
      stock={stock}
      setStock={setStock}
      defaultValueTypeStock={getTypeFoodLabel(stock.Type)}
    />
  );
}
