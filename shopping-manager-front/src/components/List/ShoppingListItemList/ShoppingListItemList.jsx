import s from "./style.module.css";
import { BootstrapIcon } from "../../Reusable/BootstrapIcon/BootstrapIcon";
import { deleteShoppingList } from "../../../store/list/shoppingList-slice";
import { useDispatch } from "react-redux";

export function ShoppingListItemList({ shoppingListItem }) {
  var dispatch = useDispatch();

  function deleteShoppingListAction() {
    dispatch(deleteShoppingList(shoppingListItem));
  }
  return (
    <div className={`row ${s.cellShoppingListList}`}>
      <div className={`col-2 ${s.idShoppingList}`}>{shoppingListItem.id}</div>
      <div className={`col-3 ${s.nameShoppingList}`}>
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
          onClickAction={() => alert("edit")}
          param={shoppingListItem.id}
        />
      </div>
    </div>
  );
}
