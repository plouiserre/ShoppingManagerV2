import { useState } from "react";
import { ValidateStock } from "../../domain/validateStock";
import { useDispatch, useSelector } from "react-redux";
import { editStock } from "../../store/stock/stock-slice";
import { useNavigate, useParams } from "react-router-dom";
import { StockForm } from "../../components/Stock/StockForm/StockForm";
import { getTypeFoodId, getTypeFoodLabel } from "../../domain/manageFoodType";

//TODO factorize with AddStock
export function StockEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [visibility, setVisibility] = useState(false);

  const id = parseInt(params.id);
  var stockLoad = LoadDetail();
  var stockBdd = stockLoad[0];

  function LoadDetail() {
    var stocks = useSelector((store) => store.STOCK.stocks);
    return stocks.filter((item) => item.Id === id);
  }
  const [stock, setStock] = useState({
    Name: stockBdd.Name,
    Type: getTypeFoodLabel(stockBdd.Type),
    Quantity: stockBdd.Quantity,
    DatePeremption: stockBdd.DatePeremption,
  });

  //TODO rewrite this code
  function saveStock() {
    stock.IsDateSelected = true;
    stock.Id = id;
    var result = ValidateStock(stock);
    setVisibility(!result);
    if (result) {
      stock.Type = getTypeFoodId(stock.Type);
      dispatch(editStock(stock));
      navigate("/stock/");
    }
  }

  return (
    <StockForm
      stock={stock}
      visibility={visibility}
      setStock={setStock}
      saveStock={saveStock}
      defaultValueTypeStock={stock.Type}
    />
  );
}
