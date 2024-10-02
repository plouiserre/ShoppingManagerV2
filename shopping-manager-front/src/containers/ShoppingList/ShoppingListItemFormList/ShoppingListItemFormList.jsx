import s from "./style.module.css";
import { ShoppingListItemForm } from "../ShoppingListItemForm/ShoppingListItemForm";
import { ShoppingListItemFormComplete } from "../ShoppingListItemForm/ShoppingListItemFormComplete";
import { useSelector } from "react-redux";

export function ShoppingListItemFormList() {
  const listItems = useSelector(
    (store) => store.SHOPPINGLISTITEM.shoppingListItems
  );
  return (
    <>
      {" "}
      <div className={`row`}>
        <div className={`col-3`}></div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListDarkBackgroundColor}`}
        >
          Numéro
        </div>
        <div
          className={`col-2 ${s.cellMealsSubList} ${s.cellMealsSubListDarkBackgroundColor}`}
        >
          Nom
        </div>
        <div
          className={`col-2 ${s.cellMealsSubList} ${s.cellMealsSubListDarkBackgroundColor}`}
        >
          Type
        </div>
        <div
          className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListDarkBackgroundColor}`}
        >
          Quantité
        </div>
        <div
          className={`col-2 ${s.cellMealsSubList} ${s.cellMealsSubListDarkBackgroundColor}`}
        >
          Actions
        </div>
      </div>
      {listItems.map((item) => {
        if (item.statusList === "Validation") {
          return <ShoppingListItemFormComplete listItemWorking={item} />;
        } else {
          return (
            <ShoppingListItemForm
              listItemWorking={item}
              length={listItems.length}
            />
          );
        }
      })}
    </>
  );
}
