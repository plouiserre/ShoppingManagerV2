import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StockForm } from "../../containers/Stock/StockForm/StockForm";
import { flushStockItem } from "../../store/stock/stockitem-slice";

export function AddStock() {
  const dispatch = useDispatch();
  dispatch(flushStockItem());

  const [visibility, setVisibility] = useState(false);

  return (
    <StockForm
      visibility={visibility}
      defaultValueTypeStock={"Sélectionner une valeur"}
    />
  );
}
