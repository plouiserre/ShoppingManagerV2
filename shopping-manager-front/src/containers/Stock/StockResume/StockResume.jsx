import { useSelector } from "react-redux";
import { Resume } from "../../../components/Global/Resume/Resume";

export function StockResume() {
  const stocks = useSelector((store) => store.STOCK.stocks);
  const elementsLoaded = stocks !== undefined && stocks.length > 0;

  return <Resume keyword={"stock"} address={"stock"} elements={stocks} />;
}
