import { CustomButton } from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { useSelector } from "react-redux";

export function StockResume() {
  const navigate = useNavigate();
  const stocks = useSelector((store) => store.STOCK.stocks);
  const elementsLoaded = stocks !== undefined && stocks.length > 0;
  return (
    <div>
      <h1>Stock Actuel</h1>
      <div style={{ display: !elementsLoaded ? "block" : "none" }}>
        <p className={`${s.text}`}>Aucun stock programmé pour le moment</p>
        <CustomButton
          labelButton={"Ajouter un nouvel élément"}
          actionButton={() => navigate("/stock/add/")}
        />
      </div>
      <div style={{ display: elementsLoaded ? "block" : "none" }}>
        <p>
          Aujourd'hui il y a{" "}
          <span className={`${s.elementStock}`}>
            {stocks !== undefined ? stocks.length : 0}
          </span>{" "}
          éléments dans le stock
        </p>
        <CustomButton
          labelButton={"Liste Stock actuel"}
          actionButton={() => navigate("/stock/")}
        />
      </div>
    </div>
  );
}
