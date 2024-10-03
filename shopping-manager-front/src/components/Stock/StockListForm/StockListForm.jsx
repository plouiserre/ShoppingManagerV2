import { StockItemForm } from "../StockItemForm/StockItemForm";
import { useSelector } from "react-redux";

//TODO déplacer dans containers
export function StockListForm({ stock, setStock }) {
  //récupérer la liste des stocks
  var stockItems = useSelector((store) => store.STOCKITEM.stockItems);
  //faire la boucle
  //valider que ca marche
  return stockItems.map((stockItem) => {
    return (
      <StockItemForm stockItem={stockItem} stock={stock} setStock={setStock} />
    );
  });
}
