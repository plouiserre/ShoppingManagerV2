import s from "./style.module.css";
import { BootstrapDropdown } from "../../../components/Reusable/BootstrapDropdown/BootstrapDropdown";
import { CustomButton } from "../../../components/Reusable/CustomButton/CustomButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ErrorMessage } from "../../../components/Global/ErrorMessage/ErrorMessage";
import {
  deleteShoppingListItems,
  completeShoppingListItemNewList,
} from "../../../store/list/shoppingListItem-slice";

export function ShoppingListItemForm({ listItemWorking, length }) {
  var dispatch = useDispatch();
  const defaultValueType = "Veuillez choisir un type";
  const labelType =
    listItemWorking.type !== undefined && listItemWorking.type !== ""
      ? listItemWorking.type
      : "Veuillez choisir un type";
  var listItem = { ...listItemWorking };
  const [nameListItem, setNameListItem] = useState(listItem.name);
  const [typeListItem, setTypeListItem] = useState(labelType);
  var initQuantity =
    listItemWorking.quantity > 0 ? listItemWorking.quantity : 0;
  const [quantityListItem, setQuantityListItem] = useState(initQuantity);
  //TODO voir comment centraliser le type de stock ou d'élément de la liste
  const typeElementLists = ["Légumes", "Viande", "Petit déjeuner"];
  const [errorMessageVisibility, setErrorMessageVisibility] = useState(false);
  const [errorMessageValue, setErrorMessageValue] = useState("");

  function clickDropdownListTypeElementList(value) {
    setTypeListItem(value);
  }

  function ValidateListItem() {
    if (nameListItem === undefined || nameListItem === "") {
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        "Merci de spécifier le nom de cet élément de la liste"
      );
    } else if (
      typeListItem === undefined ||
      typeListItem === "" ||
      typeListItem === defaultValueType
    ) {
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        "Merci de choisir le type de cet élément de la liste"
      );
    } else if (quantityListItem === undefined || quantityListItem === 0) {
      setErrorMessageVisibility(true);
      setErrorMessageValue(
        "Merci de choisir une quantité supérieur à 0 pour cet élément de la liste"
      );
    } else {
      listItem.name = nameListItem;
      listItem.type = typeListItem;
      listItem.quantity = quantityListItem;
      dispatch(completeShoppingListItemNewList(listItem));
    }
  }

  function deleteEmptyLine() {
    dispatch(deleteShoppingListItems(listItem));
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
          <input
            type="text"
            className="form-control"
            value={nameListItem}
            onChange={(event) => {
              setNameListItem(event.target.value);
            }}
          />
        </div>
        <div
          className={`col-2 ${s.cellListsSubList} ${s.cellListsSubListbottom}`}
        >
          <BootstrapDropdown
            dropdownValues={typeListItem}
            clickDropDownAction={clickDropdownListTypeElementList}
            values={typeElementLists}
          />
        </div>
        <div
          className={`col-1 ${s.cellListsSubList} ${s.cellListsSubListbottom}`}
        >
          <input
            type="number"
            className={`${s.numberQuantityListItem}`}
            value={quantityListItem}
            onChange={(event) => {
              setQuantityListItem(event.target.value);
            }}
          />
        </div>
        <div
          className={`col-2 ${s.cellListsSubList} ${s.cellListsSubListRight} ${s.cellListsSubListbottom}`}
        >
          <div className={`${s.actionsListsLittle}`}>
            <CustomButton
              labelButton={"Valider"}
              actionButton={() => ValidateListItem()}
              customClass={"btn btn-success"}
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
      {errorMessageVisibility && (
        <ErrorMessage messageError={errorMessageValue} />
      )}
    </>
  );
}
