import { AddElement } from "../../components/AddElement/AddElement";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { useSelector } from "react-redux";

export function StockResume() {
  const navigate = useNavigate();
  const stocks = useSelector((store) => store.STOCK.stocks);
  const elementsLoaded = stocks.length > 0;
  return (
    <div>
      <h1>Stock Actuel</h1>
      <div style={{ display: !elementsLoaded ? "block" : "none" }}>
        <p className={`${s.text}`}>Aucun stock programmé pour le moment</p>
        <AddElement
          labelButton={"Ajouter un nouvel élément"}
          actionButton={() => navigate("/stock/add/")}
        />
      </div>
      <div style={{ display: elementsLoaded ? "block" : "none" }}>
        <p>
          Aujourd'hui il y a{" "}
          <span className={`${s.elementStock}`}>{stocks.length}</span> éléments
          dans le stock
        </p>
        <AddElement
          labelButton={"Liste Stock actuel"}
          actionButton={() => navigate("/stock/")}
        />
      </div>
    </div>
  );
}
