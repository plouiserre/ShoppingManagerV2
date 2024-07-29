import { useState } from "react";
import s from "./style.module.css";
export function StockSubElement() {
  const [stock, setStock] = useState({
    Name: "",
    Type: "",
    Quantity: 1,
    DatePeremption: Date(),
  });
  return (
    <>
      <div className={`row ${s.lineForm}`}>
        <div className="col-3"></div>
        <div className={`col-7 ${s.elementLabel}`}>Sous-Elements</div>
        <div className="col-2"></div>
      </div>
      <div className={`row ${s.lineForm}`}>
        <div className="col-4"></div>
        <div className="col-2">Quantité</div>
        <div className="col-4">
          <input
            type="number"
            value={stock.Quantity}
            onChange={(event) => {
              setStock({ ...stock, Quantity: event.target.value });
            }}
          />
        </div>
        <div className="col-2"></div>
      </div>
      <div className={`row ${s.lineForm}`}>
        <div className="col-4"></div>
        <div className="col-2">Date de péremption</div>
        <div className="col-4">
          <input
            type="date"
            value={stock.DatePeremption}
            onChange={(event) => {
              setStock({
                ...stock,
                DatePeremption: event.target.value,
                IsDateSelected: true,
              });
            }}
          />
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
}
