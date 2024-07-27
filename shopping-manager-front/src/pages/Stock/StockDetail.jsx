import s from "./style.module.css";
import { Pictogramme } from "../../components/Pictogramme/Pictogramme";

export function StockDetail() {
  return (
    <div className={`container-fluid ${s.formStock}`}>
      <div className={`row ${s.lineDetail}`}>
        <div className="col-3"></div>
        <div className="col-7">
          <h1 className={`${s.titleForm}`}>Stock Element</h1>
        </div>
        <div className="col-2"></div>
      </div>
      <div className={`row ${s.lineDetail}`}>
        <div className="col-3"></div>
        <div className="col-3">Nom</div>
        <div className={`col-4 ${s.nameStock}`}>Patate</div>
        <div className="col-2"></div>
      </div>
      <div className={`row ${s.lineDetail}`}>
        <div className="col-3"></div>
        <div className="col-3">Type</div>
        <div className="col-4">
          <Pictogramme pictoName={"vegetables"} height={50} width={50} />
        </div>
        <div className="col-2"></div>
      </div>
      <div className={`row ${s.lineDetail}`}>
        <div className="col-3"></div>
        <div className="col-3">Quantité</div>
        <div className="col-4">2</div>
        <div className="col-2"></div>
      </div>
      <div className={`row ${s.lineDetail}`}>
        <div className="col-3"></div>
        <div className="col-3">Status</div>
        <div className="col-4">
          <Pictogramme pictoName={"ok"} height={50} width={50} />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
