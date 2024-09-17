import s from "./style.module.css";
import { ListFormListItem } from "../ListFormListItem/ListFormListItem";
import { ListFormListItemComplete } from "../ListFormListItem/ListFormListItemComplete";
import { useSelector } from "react-redux";

export function ListFormList() {
  const listItems = useSelector((store) => store.LISTITEM.listItems);
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
          Status
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
          return <ListFormListItemComplete listItemWorking={item} />;
        } else {
          return (
            <ListFormListItem
              listItemWorking={item}
              length={listItems.length}
            />
          );
        }
      })}
    </>
  );
}
