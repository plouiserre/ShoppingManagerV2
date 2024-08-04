import s from "./style.module.css";
import { CustomButton } from "../CustomButton/CustomButton";

export function MealResume() {
  function simulateBehavior() {
    alert("go to add new meal");
  }
  return (
    <div>
      <h1>Repas programmés</h1>
      <p className={`${s.text}`}>Aucun liste programmée pour le moment</p>
      <CustomButton
        labelButton={"Ajouter un nouveau repas"}
        actionButton={simulateBehavior}
      />
    </div>
  );
}
