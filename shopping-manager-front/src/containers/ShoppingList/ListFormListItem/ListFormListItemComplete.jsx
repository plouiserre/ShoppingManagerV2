import s from "./style.module.css";
import { CustomButton } from "../../../components/Reusable/CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import {
  deleteShoppingListItems,
  stopCompleteShoppingListItem,
} from "../../../store/list/shoppingListItem-slice";

export function ListFormListItemComplete({ listItemWorking }) {
  const listItem = { ...listItemWorking };
  var dispatch = useDispatch();
  function deleteEmptyLine() {
    dispatch(deleteShoppingListItems(listItem));
  }

  function editListItem() {
    dispatch(stopCompleteShoppingListItem(listItem));
  }
  return (
    <>
      <div className="row">
        <div className="col-3"></div>
        <div
          className={`col-1 ${s.cellListsSubList} ${s.cellListsSubListbottom}`}
        >
          {listItem.id}
        </div>
        <div
          className={`col-2 ${s.cellListsSubList} ${s.cellListsSubListbottom}`}
        >
          {listItem.name}
        </div>
        <div
          className={`col-2 ${s.cellListsSubList} ${s.cellListsSubListbottom}`}
        >
          {listItem.type}
        </div>
        <div
          className={`col-1 ${s.cellListsSubList} ${s.cellListsSubListbottom}`}
        >
          {listItem.quantity}
        </div>
        <div
          className={`col-2 ${s.cellListsSubList} ${s.cellListsSubListRight} ${s.cellListsSubListbottom}`}
        >
          <div className={`${s.actionsListsLittle}`}>
            <CustomButton
              labelButton={"Edit"}
              actionButton={() => editListItem()}
              customClass={"btn btn-secondary"}
            />
            <CustomButton
              labelButton={"Supprimer"}
              actionButton={() => deleteEmptyLine()}
              customClass={"btn btn-danger"}
            />
          </div>
        </div>
        <div className={`col-2`}></div>
      </div>
    </>
  );
}
