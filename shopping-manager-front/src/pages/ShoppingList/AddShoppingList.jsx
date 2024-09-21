import { ListForm } from "../../containers/ShoppingList/ListForm/ListForm";
import { useDispatch } from "react-redux";
import { flushListItem } from "../../store/list/listItem-slice";

export function AddShoppingList() {
  var dispatch = useDispatch();
  dispatch(flushListItem());
  return <ListForm />;
}
