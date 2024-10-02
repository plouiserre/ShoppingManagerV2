import s from "./style.module.css";
export function StockFormListItem({ stock, setStock }) {
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
        <div className="col-3">
          <input
            type="number"
            className="form-control"
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
        <div className="col-3">
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
            className="form-control"
          />
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
}
