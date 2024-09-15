import { BootstrapDropdown } from "../../../components/Reusable/BootstrapDropdown/BootstrapDropdown";
import { ListFormList } from "../ListFormList/ListFormList";
import { CustomButton } from "../../../components/Reusable/CustomButton/CustomButton";
import s from "./style.module.css";
import { useState } from "react";

export function ListForm() {
  const [valueDisplay, setvalueDisplayed] = useState("Sélectionner une valeur");
  const status = ["Brouillon", "Valide", "Obsolète"];

  function clickStatusList(value) {
    setvalueDisplayed(value);
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
          <div className="col-3">Statut</div>
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
          <ListFormList />
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-7">
            <CustomButton
              labelButton={"Nouvel élément liste"}
              actionButton={() => alert("nouvel élément")}
              customClass={"btn btn-info"}
            />
          </div>
          <div className="col-2"></div>
        </div>
      </form>
    </div>
  );
}
