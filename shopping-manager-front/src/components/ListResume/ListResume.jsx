import s from "./style.module.css";
import { AddElement } from "../AddElement/AddElement";

export function ListResume() {
  function simulateBehavior() {
    alert("go to add new list");
  }
  return (
    <div>
      <h1>Listes de course enregistrées</h1>
      <p className={`${s.text}`}>Aucun liste programmée pour le moment</p>
      <AddElement
        labelButton={"Ajouter une nouvelle liste"}
        actionButton={simulateBehavior}
      />
    </div>
  );
}
