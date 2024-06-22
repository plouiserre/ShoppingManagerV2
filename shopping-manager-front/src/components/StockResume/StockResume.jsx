import { AddElement } from "../AddElement/AddElement";
import s from "./style.module.css";

export function StockResume() {
  function simulateBehavior() {
    alert("go to add stock");
  }

  return (
    <div>
      <h1>Stock actuel</h1>
      <p className={`${s.text}`}>Aucun stock programmé pour le moment</p>
      <AddElement
        labelButton={"Ajouter un nouvel élément"}
        actionButton={simulateBehavior}
      />
    </div>
  );
}
