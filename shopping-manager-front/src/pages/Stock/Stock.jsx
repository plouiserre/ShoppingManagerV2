import { CustomButton } from "../../components/CustomButton/CustomButton";
import { StockList } from "../../containers/StockList/StockList";
import { useNavigate } from "react-router-dom";

export function Stock() {
  const navigate = useNavigate();
  return (
    <>
      <StockList />
      <CustomButton
        labelButton={"Ajouter un nouvel élément"}
        actionButton={() => navigate("/stock/add/")}
      />
    </>
  );
}
