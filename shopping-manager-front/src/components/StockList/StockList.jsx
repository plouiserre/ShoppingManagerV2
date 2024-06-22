import s from "./style.module.css";
import { Pictogramme } from "../Pictogramme/Pictogramme";

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
          <Pictogramme pictoName={"vegetables"} height={50} width={50} />
        </div>
        <div className={`col-2 ${indiceFoodClasses}`}>2</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"ok"} height={50} width={50} />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"sup"} height={50} width={50} />
          <Pictogramme pictoName={"edit"} height={50} width={50} />
        </div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${indiceFoodClasses}`}>2</div>
        <div className={`col-2 ${nameFoodClasses}`}>Lapin</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"meat"} height={50} width={50} />
        </div>
        <div className={`col-2 ${indiceFoodClasses}`}>3</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"ok"} height={50} width={50} />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"sup"} height={50} width={50} />
          <Pictogramme pictoName={"edit"} height={50} width={50} />
        </div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${indiceFoodClasses}`}>3</div>
        <div className={`col-2 ${nameFoodClasses}`}>Boeuf</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"meat"} height={50} width={50} />
        </div>
        <div className={`col-2 ${indiceFoodClasses}`}>2</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"error"} height={50} width={50} />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"sup"} height={50} width={50} />
          <Pictogramme pictoName={"edit"} height={50} width={50} />
        </div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${indiceFoodClasses}`}>4</div>
        <div className={`col-2 ${nameFoodClasses}`}>Yaourt</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"breakfast"} height={50} width={50} />
        </div>
        <div className={`col-2 ${indiceFoodClasses}`}>8</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"ok"} height={50} width={50} />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"sup"} height={50} width={50} />
          <Pictogramme pictoName={"edit"} height={50} width={50} />
        </div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${indiceFoodClasses}`}>5</div>
        <div className={`col-2 ${nameFoodClasses}`}>Taboulé</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"vegetables"} height={50} width={50} />
        </div>
        <div className={`col-2 ${indiceFoodClasses}`}>1</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"ok"} height={50} width={50} />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"sup"} height={50} width={50} />
          <Pictogramme pictoName={"edit"} height={50} width={50} />
        </div>
      </div>
      <div className={`row ${s.stockListItem}`}>
        <div className={`col-2 ${indiceFoodClasses}`}>6</div>
        <div className={`col-2 ${nameFoodClasses}`}>Brocolis</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"vegetables"} height={50} width={50} />
        </div>
        <div className={`col-2 ${indiceFoodClasses}`}>5</div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"warning"} height={50} width={50} />
        </div>
        <div className={`col-2 ${s.cellStockList}`}>
          <Pictogramme pictoName={"sup"} height={50} width={50} />
          <Pictogramme pictoName={"edit"} height={50} width={50} />
        </div>
      </div>
    </div>
  );
}
