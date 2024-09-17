import { BootstrapDropdown } from "../../../components/Reusable/BootstrapDropdown/BootstrapDropdown";
import { ListFormList } from "../ListFormList/ListFormList";
import { CustomButton } from "../../../components/Reusable/CustomButton/CustomButton";
import s from "./style.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addListItemEmpty } from "../../../store/list/listItem-slice";

export function ListForm() {
  const [valueDisplay, setvalueDisplayed] = useState("Sélectionner une valeur");
  const status = ["Brouillon", "Valide", "Obsolète"];
  const dispatch = useDispatch();

  function clickStatusList(value) {
    setvalueDisplayed(value);
  }

  function AddNewElement() {
    dispatch(addListItemEmpty());
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
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-3">Type</div>
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
      </form>
    </div>
  );
}
