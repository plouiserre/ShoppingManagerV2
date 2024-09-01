import s from "./style.module.css";
import { CustomButton } from "../../Reusable/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

export function MealResume() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Repas programmés</h1>
      <p className={`${s.text}`}>Aucun liste programmée pour le moment</p>
      <CustomButton
        labelButton={"Ajouter un nouveau repas"}
        actionButton={() => navigate("/meal/add")}
      />
    </div>
  );
}
