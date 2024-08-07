import { useState } from "react";
import { ValidateStock } from "../../domain/validateStock";
import { useDispatch } from "react-redux";
import { addStockItem } from "../../store/stock/stock-slice";
import { useNavigate } from "react-router-dom";
import { StockForm } from "../../components/StockForm/StockForm";

export function AddStock() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stock, setStock] = useState({
    Name: "",
    Type: "",
    Quantity: 1,
    DatePeremption: Date(),
  });

  const [visibility, setVisibility] = useState(false);

  //TODO rewrite this code
  function setType(stock) {
    if (stock.Type === "Viande") stock.Type = "meat";
    else if (stock.Type === "Légumes") stock.Type = "vegetables";
    else stock.Type = "breakfast";
  }

  //TODO rewrite this code
  function saveStock() {
    var result = ValidateStock(stock);
    setVisibility(!result);
    if (result) {
      setType(stock);
      dispatch(addStockItem(stock));
      navigate("/stock/");
    }
  }

  return (
    <StockForm
      stock={stock}
      visibility={visibility}
      setStock={setStock}
      saveStock={saveStock}
    />
  );
}
