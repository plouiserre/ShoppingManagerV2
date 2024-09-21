import { BootstrapDropdown } from "../../../components/Reusable/BootstrapDropdown/BootstrapDropdown";
import { ListFormList } from "../ListFormList/ListFormList";
import { CustomButton } from "../../../components/Reusable/CustomButton/CustomButton";
import s from "./style.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addListItemEmpty } from "../../../store/list/listItem-slice";
import { saveList } from "../../../store/list/shoppingList-slice";
import { ErrorMessage } from "../../../components/Global/ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";

export function ListForm() {
  const defaultValueList = "Sélectionner une valeur";
  const [list, setList] = useState({});
  const [errorMessageVisibility, setErrorMessageVisibility] = useState(false);
  const [errorMessageValue, setErrorMessageValue] = useState("");
  const [valueDisplay, setvalueDisplayed] = useState(defaultValueList);
  const status = ["Brouillon", "Valide", "Obsolète"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listItems = useSelector((store) => store.LISTITEM.listItems);

  function clickStatusList(value) {
    setvalueDisplayed(value);
    setList({ ...list, status: value });
  }

  function AddNewElement() {
    dispatch(addListItemEmpty());
  }

  function saveAllList() {
    if (validateList()) {
      const newList = { ...list };
      dispatch(saveList({ list: newList, listItems: listItems }));
      navigate("/ShoppingList/");
    }
  }

  function validateList() {
    if (list.Name === undefined || list.Name === "") {
      setErrorMessageVisibility(true);
      setErrorMessageValue("Merci de spécifier le nom de cette liste");
      return false;
    } else if (list.status === undefined || list.status === defaultValueList) {
      setErrorMessageVisibility(true);
      setErrorMessageValue("Merci de spécifier un status à cette liste");
      return false;
    } else if (listItems.length == 0) {
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
    for (var i = 0; i < listItems.length; i++) {
      const item = listItems[i];
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
          <ListFormList />
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
            <CustomButton
              labelButton={"Enregistrer"}
              actionButton={() => saveAllList()}
            />
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
