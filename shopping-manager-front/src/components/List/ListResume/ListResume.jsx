import s from "./style.module.css";
import { CustomButton } from "../../Reusable/CustomButton/CustomButton";

export function ListResume() {
  function simulateBehavior() {
    alert("go to add new list");
  }
  return (
    <div>
      <h1>Listes de course enregistrées</h1>
      <p className={`${s.text}`}>Aucun liste programmée pour le moment</p>
      <CustomButton
        labelButton={"Ajouter une nouvelle liste"}
        actionButton={simulateBehavior}
      />
    </div>
  );
}
