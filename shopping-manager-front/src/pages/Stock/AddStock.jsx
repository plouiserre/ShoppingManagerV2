import { useState } from "react";
import { ValidateStock } from "../../domain/validateStock";
import { useDispatch, useSelector } from "react-redux";
import { addStock } from "../../store/stock/stock-slice";
import { useNavigate } from "react-router-dom";
import { StockForm } from "../../components/Stock/StockForm/StockForm";
import { getTypeFoodId } from "../../domain/manageFoodType";
import { flushStockItem } from "../../store/stock/stockitem-slice";

export function AddStock() {
  const dispatch = useDispatch();
  dispatch(flushStockItem());
  const [stock, setStock] = useState({
    Name: "",
    Type: "",
    Quantity: 1,
    DatePeremption: Date(),
  });

  const [visibility, setVisibility] = useState(false);

  return (
    <StockForm
      stock={stock}
      visibility={visibility}
      setStock={setStock}
      saveStock={""}
      defaultValueTypeStock={"Sélectionner une valeur"}
    />
  );
}
