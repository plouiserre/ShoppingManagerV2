import { ShoppingListForm } from "../../containers/ShoppingList/ShoppingListForm/ShoppingListForm";
import { useDispatch } from "react-redux";
import { flushShoppingListItem } from "../../store/list/shoppingListItem-slice";

export function AddShoppingList() {
  var dispatch = useDispatch();
  dispatch(flushShoppingListItem());
  return <ShoppingListForm />;
}
