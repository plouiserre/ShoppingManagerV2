import s from "./style.module.css";

export function DetailStockItems({ stockItems }) {
  return stockItems.map((stockItem) => {
    return (
      <div className={`row ${s.detailStockItem} ${s.cellList}`}>
        <div className={`col-4 ${s.detailStockId}`}>{stockItem.Id}</div>
        <div className={`col-4 ${s.detailStockItemQuantity}`}>
          {stockItem.Quantity}
        </div>
        <div className={`col-4 ${s.detailStockItemQuantity}`}>
          {stockItem.DatePeremption}
        </div>
      </div>
    );
  });
}
