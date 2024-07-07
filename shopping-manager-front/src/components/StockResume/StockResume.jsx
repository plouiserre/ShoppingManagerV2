import { AddElement } from "../AddElement/AddElement";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export function StockResume() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Stock actuel</h1>
      <p className={`${s.text}`}>Aucun stock programmé pour le moment</p>
      <AddElement
        labelButton={"Ajouter un nouvel élément"}
        actionButton={() => navigate("/stock/add/")}
      />
    </div>
  );
}
