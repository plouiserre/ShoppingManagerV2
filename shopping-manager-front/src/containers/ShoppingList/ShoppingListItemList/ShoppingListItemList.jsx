import s from "./style.module.css";
import { BootstrapIcon } from "../../../components/Reusable/BootstrapIcon/BootstrapIcon";
import { deleteShoppingList } from "../../../store/list/shoppingList-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function ShoppingListItemList({ shoppingListItem }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function deleteShoppingListAction() {
    dispatch(deleteShoppingList(shoppingListItem));
  }
  return (
    <div className={`row ${s.cellShoppingListList}`}>
      <div className={`col-2 ${s.idShoppingList}`}>{shoppingListItem.id}</div>
      <div
        className={`col-3 ${s.nameShoppingList}`}
        onClick={() => navigate("/ShoppingList/" + shoppingListItem.id)}
      >
        {shoppingListItem.Name}
      </div>
      <div className={`col-2 ${s.statusShoppingList}`}>
        {shoppingListItem.status}
      </div>
      <div className={`col-2 ${s.ShoppingListItems}`}>
        {shoppingListItem.shoppingListItems.length}
      </div>
      <div className={`col-3 ${s.actionsShoppingList}`}>
        {" "}
        <BootstrapIcon
          cssClass={"bi bi-trash btn btn-outline-danger"}
          onClickAction={() => deleteShoppingListAction()}
          param={shoppingListItem}
        />
        <BootstrapIcon
          cssClass={"bi bi-pencil-square btn btn-success"}
          onClickAction={() =>
            navigate("/ShoppingList/edit/" + shoppingListItem.id)
          }
          param={shoppingListItem.id}
        />
      </div>
    </div>
  );
}
