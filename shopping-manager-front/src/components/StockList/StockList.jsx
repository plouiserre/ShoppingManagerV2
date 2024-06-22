import s from "./style.module.css";
import coffee from "../../assets/images/cafe.png";
import meat from "../../assets/images/viande.png";
import vegetables from "../../assets/images/legumes.png";
import error from "../../assets/images/error.png";
import ok from "../../assets/images/ok.png";
import warning from "../../assets/images/warning.png";
import sup from "../../assets/images/delete.png";
import edit from "../../assets/images/edit.png";

export function StockList() {
  const nameFoodClasses = `${s.cellStockList} ${s.nameFood}`;
  const indiceFoodClasses = `${s.cellStockList} ${s.indexFood}`;

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
        <div className={`col-2 ${indiceFoodClasses}`}>1</div>
        <div className={`col-2 ${nameFoodClasses}`}>Carotte</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={vegetables} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${indiceFoodClasses}`}>2</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={ok} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={sup} height="50px" width="50px" />{" "}
          <img src={edit} height="50px" width="50px" />
        </div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${indiceFoodClasses}`}>2</div>
        <div className={`col-2 ${nameFoodClasses}`}>Lapin</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={meat} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${indiceFoodClasses}`}>3</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={ok} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={sup} height="50px" width="50px" />
          <img src={edit} height="50px" width="50px" />
        </div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${indiceFoodClasses}`}>3</div>
        <div className={`col-2 ${nameFoodClasses}`}>Boeuf</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={meat} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${indiceFoodClasses}`}>2</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={error} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={sup} height="50px" width="50px" />
          <img src={edit} height="50px" width="50px" />
        </div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${indiceFoodClasses}`}>4</div>
        <div className={`col-2 ${nameFoodClasses}`}>Yaourt</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={coffee} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${indiceFoodClasses}`}>8</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={ok} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={sup} height="50px" width="50px" />
          <img src={edit} height="50px" width="50px" />
        </div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${indiceFoodClasses}`}>5</div>
        <div className={`col-2 ${nameFoodClasses}`}>Taboulé</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={vegetables} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${indiceFoodClasses}`}>1</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={ok} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={sup} height="50px" width="50px" />
          <img src={edit} height="50px" width="50px" />
        </div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${indiceFoodClasses}`}>6</div>
        <div className={`col-2 ${nameFoodClasses}`}>Brocolis</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={vegetables} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${indiceFoodClasses}`}>5</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={warning} height="50px" width="50px" />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>
          <img src={sup} height="50px" width="50px" />
          <img src={edit} height="50px" width="50px" />
        </div>
      </div>
    </div>
  );
}
