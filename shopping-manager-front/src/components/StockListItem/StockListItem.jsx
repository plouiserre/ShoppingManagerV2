import s from "./style.module.css";
import { Pictogramme } from "../Pictogramme/Pictogramme";

export function StockListItem({ element, clickName }) {
  const nameFoodClasses = `${s.cellStockList} ${s.nameFood}`;
  const indiceFoodClasses = `${s.cellStockList} ${s.indexFood}`;

  function clickButtonName(actionName) {
    alert("You go to the action of " + actionName);
  }

  return (
    <div className={`row ${s.headerStockList}`}>
      <div className={`col-2 ${indiceFoodClasses}`}>{element.Id}</div>
      <div
        className={`col-2 ${nameFoodClasses}`}
        onClick={() => clickName(element.Name)}
      >
        {element.Name}
      </div>
      <div className={`col-2 ${s.cellStockList}`}>
        <Pictogramme pictoName={element.Type} height={50} width={50} />
      </div>
      <div className={`col-2 ${indiceFoodClasses}`}>{element.Quantity}</div>
      <div className={`col-2 ${s.cellStockList}`}>
        <Pictogramme pictoName={element.Status} height={50} width={50} />
      </div>
      <div className={`col-2 ${s.cellStockList}`}>
        <Pictogramme
          className={`${s.deleteButton}`}
          pictoName={"sup"}
          height={50}
          width={50}
          clickName={clickButtonName}
          actionName={"delete"}
        />
        <Pictogramme
          className={`${s.editButton}`}
          pictoName={"edit"}
          height={50}
          width={50}
          clickName={clickButtonName}
          actionName={"edit"}
        />
      </div>
    </div>
  );
}
