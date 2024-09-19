import { useSelector } from "react-redux";
import { Resume } from "../../../components/Global/Resume/Resume";

export function StockResume() {
  const stocks = useSelector((store) => store.STOCK.stocks);

  return <Resume keyword={"stock"} address={"stock"} elements={stocks} />;
}
