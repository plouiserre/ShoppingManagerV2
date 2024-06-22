import s from "./style.module.css";
import coffee from "../../assets/images/cafe.png";
import meat from "../../assets/images/viande.png";
import vegetables from "../../assets/images/legumes.png";

export function StockList() {
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
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${s.cellStockList}`}>1</div>
        <div className={`col-2 ${s.cellStockList}`}>Carotte</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={vegetables} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>2</div>
        <div className={`col-2 ${s.cellStockList}`}>OK</div>
        <div className={`col-2 ${s.cellStockList}`}>Supprimer Modifier</div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${s.cellStockList}`}>2</div>
        <div className={`col-2 ${s.cellStockList}`}>Lapin</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={meat} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>3</div>
        <div className={`col-2 ${s.cellStockList}`}>OK</div>
        <div className={`col-2 ${s.cellStockList}`}>Supprimer Modifier</div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${s.cellStockList}`}>3</div>
        <div className={`col-2 ${s.cellStockList}`}>Boeuf</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={meat} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>2</div>
        <div className={`col-2 ${s.cellStockList}`}>Périmé</div>
        <div className={`col-2 ${s.cellStockList}`}>Supprimer Modifier</div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${s.cellStockList}`}>4</div>
        <div className={`col-2 ${s.cellStockList}`}>Yaourt</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={coffee} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>8</div>
        <div className={`col-2 ${s.cellStockList}`}>OK</div>
        <div className={`col-2 ${s.cellStockList}`}>Supprimer Modifier</div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${s.cellStockList}`}>5</div>
        <div className={`col-2 ${s.cellStockList}`}>Taboulé</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={vegetables} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>1</div>
        <div className={`col-2 ${s.cellStockList}`}>OK</div>
        <div className={`col-2 ${s.cellStockList}`}>Supprimer Modifier</div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${s.cellStockList}`}>6</div>
        <div className={`col-2 ${s.cellStockList}`}>Brocolis</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={vegetables} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>5</div>
        <div className={`col-2 ${s.cellStockList}`}>OK</div>
        <div className={`col-2 ${s.cellStockList}`}>Supprimer Modifier</div>
      </div>
    </div>
  );
}
