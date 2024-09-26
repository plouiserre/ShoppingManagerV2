import { useState } from "react";
import { ValidateStock } from "../../domain/validateStock";
import { useDispatch } from "react-redux";
import { addStock } from "../../store/stock/stock-slice";
import { useNavigate } from "react-router-dom";
import { StockForm } from "../../components/Stock/StockForm/StockForm";
import { getTypeFoodId } from "../../domain/manageFoodType";

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

  function saveStock() {
    var result = ValidateStock(stock);
    setVisibility(!result);
    if (result) {
      stock.Type = getTypeFoodId(stock.Type);
      dispatch(addStock(stock));
      navigate("/stock/");
    }
  }

  return (
    <StockForm
      stock={stock}
      visibility={visibility}
      setStock={setStock}
      saveStock={saveStock}
      defaultValueTypeStock={"Sélectionner une valeur"}
    />
  );
}
