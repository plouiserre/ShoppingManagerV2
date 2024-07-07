import { AddElement } from "../AddElement/AddElement";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import { StockMiniList } from "../StockMiniList/StockMiniList";

export function StockResume() {
  const navigate = useNavigate();
  const stocks = useSelector((store) => store.STOCK.stocks);

  function clickElementName(name) {
    alert("You go to the page of " + name);
  }
  return (
    <div>
      <h1>Stock actuel</h1>
      {/* <p className={`${s.text}`}>Aucun stock programmé pour le moment</p> */}
      <p className={`${s.text}`}>Présent dans le stock</p>
      {stocks.map((stock) => {
        return <StockMiniList key={stock.Id} stock={stock} />;
      })}
      <AddElement
        labelButton={"Ajouter un nouvel élément"}
        actionButton={() => navigate("/stock/add/")}
      />
    </div>
  );
}
