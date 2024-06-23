import s from "./style.module.css";
import { StockListItem } from "../StockListItem/StockListItem";

export function StockList() {
  const stocks = [];
  stocks.push({
    Id: 1,
    Name: "Carotte",
    Type: "vegetables",
    Quantity: 2,
    Status: "ok",
  });
  stocks.push({
    Id: 2,
    Name: "Lapin",
    Type: "meat",
    Quantity: 3,
    Status: "ok",
  });
  stocks.push({
    Id: 3,
    Name: "Boeuf",
    Type: "meat",
    Quantity: 2,
    Status: "error",
  });
  stocks.push({
    Id: 4,
    Name: "Yaourt",
    Type: "breakfast",
    Quantity: 8,
    Status: "ok",
  });
  stocks.push({
    Id: 5,
    Name: "Taboule",
    Type: "vegetables",
    Quantity: 1,
    Status: "ok",
  });
  stocks.push({
    Id: 6,
    Name: "Brocolis",
    Type: "vegetables",
    Quantity: 5,
    Status: "warning",
  });

  return (
    <div className={`${s.allStocks}`}>
      <div className={`row ${s.headerStockList}`}>
        <div className={`col-2 ${s.cellStockList}`}>ID</div>
        <div className={`col-2 ${s.cellStockList}`}>Nom</div>
        <div className={`col-2 ${s.cellStockList}`}>Type</div>
        <div className={`col-2 ${s.cellStockList}`}>Quantité</div>
        <div className={`col-2 ${s.cellStockList}`}>Status</div>
        <div className={`col-2 ${s.cellStockList}`}>Action</div>
      </div>
      {stocks.map((stock) => {
        return <StockListItem element={stock} />;
      })}
    </div>
  );
}
