import { CustomButton } from "../../components/Reusable/CustomButton/CustomButton";
import { StockList } from "../../containers/Stock/StockList/StockList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteExpiredStock } from "../../store/stock/stock-slice";

export function Stock() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function deleteActionExpiredStock() {
    dispatch(deleteExpiredStock());
  }
  return (
    <>
      <StockList />
      <div class="row">
        <div class="col-4">
          <CustomButton
            labelButton={"Ajouter un nouvel élément"}
            actionButton={() => navigate("/stock/add/")}
          />
        </div>
        <div class="col-6"></div>
        <div class="col-2">
          <CustomButton
            labelButton={"Supprimer stock périmé"}
            actionButton={() => deleteActionExpiredStock()}
            customClass={"btn btn-danger"}
          />
        </div>
      </div>
    </>
  );
}
