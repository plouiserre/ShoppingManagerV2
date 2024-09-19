import { ListForm } from "../../containers/List/ListForm/ListForm";
import { useDispatch } from "react-redux";
import { flushListItem } from "../../store/list/listItem-slice";

export function AddList() {
  var dispatch = useDispatch();
  dispatch(flushListItem());
  return <ListForm />;
}
