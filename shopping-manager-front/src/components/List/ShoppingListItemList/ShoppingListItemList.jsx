import s from "./style.module.css";
import { BootstrapIcon } from "../../Reusable/BootstrapIcon/BootstrapIcon";

export function ShoppingListItemList({ shoppingListItem }) {
  return (
    <div className={`row ${s.cellShoppingListList}`}>
      <div className={`col-2 ${s.idShoppingList}`}>{shoppingListItem.id}</div>
      <div className={`col-3 ${s.nameShoppingList}`}>
        {shoppingListItem.Name}
      </div>
      <div className={`col-2 ${s.statusShoppingList}`}>
        {shoppingListItem.status}
      </div>
      {/* quand j'aurai corrigé les données supprimé la condition du dessous */}
      <div className={`col-2 ${s.ShoppingListItems}`}>
        {shoppingListItem.listItems !== undefined
          ? shoppingListItem.listItems.length
          : 0}
      </div>
      <div className={`col-3 ${s.actionsShoppingList}`}>
        {" "}
        <BootstrapIcon
          cssClass={"bi bi-trash btn btn-outline-danger"}
          onClickAction={() => alert("delete!!!!!!")}
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
