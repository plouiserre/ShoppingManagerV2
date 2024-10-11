import s from "./style.module.css";
import { getTypeFoodId } from "../../../domain/manageFoodType";
import { Pictogramme } from "../../Reusable/Pictogramme/Pictogramme";

export function DetailShoppingItemList({ shoppingListItems }) {
  return shoppingListItems.map((shoppingListItem) => {
    const foodType = getTypeFoodId(shoppingListItem.type);
    return (
      <div className={`row ${s.detailShoppingListItem} ${s.cellList}`}>
        <div className={`col-4 ${s.detailShoppingListItemName}`}>
          {shoppingListItem.name}
        </div>
        <div className={`col-4 ${s.detailShoppingListItemType}`}>
          <Pictogramme pictoName={foodType} height={50} width={50} />
        </div>
        <div className={`col-4 ${s.detailShoppingListItemQuantity}`}>
          {shoppingListItem.quantity}
        </div>
      </div>
    );
  });
}
