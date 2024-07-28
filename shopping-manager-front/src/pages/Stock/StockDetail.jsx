import s from "./style.module.css";
import { Pictogramme } from "../../components/Pictogramme/Pictogramme";

export function StockDetail() {
  return (
    <div className={`container-fluid ${s.detailStock}`}>
      <div class="row">
        <div className="col-3"></div>
        <div className="col-2">
          <Pictogramme pictoName={"vegetables"} height={100} width={100} />
        </div>
        <div className={`col-4 ${s.stockName}`}>
          <div>Patate</div>
        </div>
        <div className="col-2"></div>
      </div>
      <div className={`row ${s.quantityStock}`}>
        <div className="col-3"></div>
        <div className="col-2">Quantité</div>
        <div className={`col-3 ${s.quantityNumber}`}>2</div>
        <div className="col-3"></div>
      </div>
      <div className={`row ${s.quantityStock}`}>
        <div className="col-3"></div>
        <div className="col-2">Status</div>
        <div className={`col-3 ${s.quantityNumber}`}>
          <Pictogramme pictoName={"ok"} height={50} width={50} />
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
