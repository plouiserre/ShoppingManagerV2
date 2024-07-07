import { AddElement } from "../../components/AddElement/AddElement";
import { StockList } from "../../containers/StockList/StockList";
import { useNavigate } from "react-router-dom";

export function Stock() {
  const navigate = useNavigate();
  return (
    <>
      <StockList />
      <AddElement
        labelButton={"Ajouter un nouvel élément"}
        actionButton={() => navigate("/stock/add/")}
      />
    </>
  );
}
