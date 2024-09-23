import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ListForm } from "../../containers/ShoppingList/ListForm/ListForm";
import {
  flushShoppingListItem,
  storeEditShoppingListItems,
} from "../../store/list/shoppingListItem-slice";

export function EditShoppingList() {
  const params = useParams();
  const dispatch = useDispatch();
  var id = parseInt(params.id);
  const shoppingLists = useSelector(
    (store) => store.SHOPPINGLIST.shoppingLists
  );
  const shoppingListSelected = shoppingLists.find((item) => item.id === id);
  dispatch(flushShoppingListItem());
  dispatch(storeEditShoppingListItems(shoppingListSelected));
  return <ListForm />;
}
