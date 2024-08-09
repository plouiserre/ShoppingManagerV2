import { useState } from "react";
import { ValidateStock } from "../../domain/validateStock";
import { useDispatch, useSelector } from "react-redux";
import { editStock } from "../../store/stock/stock-slice";
import { useNavigate, useParams } from "react-router-dom";
import { StockForm } from "../../components/StockForm/StockForm";

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
    Type: getType(stockBdd.Type),
    Quantity: stockBdd.Quantity,
    DatePeremption: stockBdd.DatePeremption,
  });

  function getType(typeName) {
    if (typeName === "meat") return "Viande blanche";
    else if (typeName === "vegetables") return "Légumes";
    else return "Petit déjeuner";
  }

  //TODO rewrite this code
  function setType(stock) {
    if (stock.Type === "Viande") stock.Type = "meat";
    else if (stock.Type === "Légumes") stock.Type = "vegetables";
    else stock.Type = "breakfast";
  }

  //TODO rewrite this code
  function saveStock() {
    stock.IsDateSelected = true;
    stock.Id = id;
    var result = ValidateStock(stock);
    setVisibility(!result);
    if (result) {
      setType(stock);
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
