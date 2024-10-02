import { BootstrapDropdown } from "../../../components/Reusable/BootstrapDropdown/BootstrapDropdown";
import { ShoppingListItemFormList } from "../ShoppingListItemFormList/ShoppingListItemFormList";
import { CustomButton } from "../../../components/Reusable/CustomButton/CustomButton";
import s from "./style.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addShoppingListItemEmpty } from "../../../store/list/shoppingListItem-slice";
import {
  editShoppingList,
  saveShoppingList,
} from "../../../store/list/shoppingList-slice";
import { ErrorMessage } from "../../../components/Global/ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";

export function ShoppingListForm({ shoppingList }) {
  const initList = shoppingList === undefined ? {} : shoppingList;
  const [list, setList] = useState(initList);
  const [errorMessageVisibility, setErrorMessageVisibility] = useState(false);
  const [errorMessageValue, setErrorMessageValue] = useState("");
  const defaultValueStatusShoppingList = "Sélectionner une valeur";
  const defaultValueStatusShoppingListUpdated =
    shoppingList === undefined
      ? defaultValueStatusShoppingList
      : shoppingList.status;
  const [valueDisplay, setvalueDisplayed] = useState(
    defaultValueStatusShoppingListUpdated
  );
  const status = ["Brouillon", "Valide", "Obsolète"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shoppingListItems = useSelector(
    (store) => store.SHOPPINGLISTITEM.shoppingListItems
  );

  function clickStatusList(value) {
    setvalueDisplayed(value);
    setList({ ...list, status: value });
  }

  function AddNewElement() {
    dispatch(addShoppingListItemEmpty());
  }

  function saveAllList() {
    if (validateShoppingList()) {
      const newShoppingList = { ...list };
      dispatch(
        saveShoppingList({
          shoppingList: newShoppingList,
          shoppingListItems: shoppingListItems,
        })
      );
      navigate("/ShoppingList/");
    }
  }

  function editAllList() {
    if (validateShoppingList()) {
      const shoppingListToUpdate = { ...list };
      dispatch(
        editShoppingList({
          shoppingList: shoppingListToUpdate,
          shoppingListItems: shoppingListItems,
        })
      );
      navigate("/ShoppingList/");
    }
  }

  function validateShoppingList() {
    if (list.Name === undefined || list.Name === "") {
      setErrorMessageVisibility(true);
      setErrorMessageValue("Merci de spécifier le nom de cette liste");
      return false;
    } else if (
      list.status === undefined ||
      list.status === defaultValueStatusShoppingList
    ) {
      setErrorMessageVisibility(true);
      setErrorMessageValue("Merci de spécifier un status à cette liste");
      return false;
    } else if (shoppingListItems.length == 0) {
      setErrorMessageVisibility(true);
      setErrorMessageValue("Merci d'ajouter des éléments à cette liste");
      return false;
    } else if (!checkAllListItemsAreComplete()) {
      setErrorMessageVisibility(true);
      setErrorMessageValue("Merci de valider tous les éléments de cette liste");
      return false;
    } else {
      return true;
    }
  }

  function checkAllListItemsAreComplete() {
    var allAreComplete = true;
    for (var i = 0; i < shoppingListItems.length; i++) {
      const item = shoppingListItems[i];
      if (item.status === "Input") {
        allAreComplete = false;
        break;
      }
    }
    return allAreComplete;
  }

  return (
    <div>
      <form className={`container-fluid ${s.formList}`}>
        <div class="row">
          <div className="col-3"></div>
          <div className="col-7">
            <h1>Nouvelle liste de course</h1>
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-3">Nom</div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Ecrivez le nom de votre liste de course"
              onChange={(event) => {
                setList({ ...list, Name: event.target.value });
              }}
              value={list.Name}
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-3">Status</div>
          <div className="col-4">
            <BootstrapDropdown
              dropdownValues={valueDisplay}
              values={status}
              clickDropDownAction={clickStatusList}
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`${s.listSub}`}>
          <ShoppingListItemFormList />
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-7">
            <CustomButton
              labelButton={"Nouvel élément liste"}
              actionButton={() => AddNewElement()}
              customClass={"btn btn-info"}
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-7">
            {shoppingList === undefined && (
              <CustomButton
                labelButton={"Enregistrer"}
                actionButton={() => saveAllList()}
              />
            )}
            {shoppingList !== undefined && (
              <CustomButton
                labelButton={"Mettre à jour"}
                actionButton={() => editAllList()}
                customClass={"btn btn-secondary"}
              />
            )}
          </div>
          <div className="col-2"></div>
        </div>
      </form>
      {errorMessageVisibility && (
        <ErrorMessage messageError={errorMessageValue} />
      )}
    </div>
  );
}
