import s from "./style.module.css";
import { BootstrapIcon } from "../../../components/Reusable/BootstrapIcon/BootstrapIcon";
import { deleteShoppingList } from "../../../store/list/shoppingList-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { calculateShoppingListQuantity } from "../../../domain/shoppingList";

export function ShoppingList({ shoppingList }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quantity = calculateShoppingListQuantity(shoppingList);

  function deleteShoppingListAction() {
    dispatch(deleteShoppingList(shoppingList));
  }
  return (
    <div className={`row ${s.cellShoppingListList}`}>
      <div className={`col-2 ${s.idShoppingList}`}>{shoppingList.id}</div>
      <div
        className={`col-3 ${s.nameShoppingList}`}
        onClick={() => navigate("/ShoppingList/" + shoppingList.id)}
      >
        {shoppingList.Name}
      </div>
      <div className={`col-2 ${s.statusShoppingList}`}>
        {shoppingList.status}
      </div>
      <div className={`col-2 ${s.ShoppingListItems}`}>{quantity}</div>
      <div className={`col-3 ${s.actionsShoppingList}`}>
        {" "}
        <BootstrapIcon
          cssClass={"bi bi-trash btn btn-outline-danger"}
          onClickAction={() => deleteShoppingListAction()}
          param={shoppingList}
        />
        <BootstrapIcon
          cssClass={"bi bi-pencil-square btn btn-success"}
          onClickAction={() =>
            navigate("/ShoppingList/edit/" + shoppingList.id)
          }
          param={shoppingList.id}
        />
      </div>
    </div>
  );
}
