import s from "./style.module.css";
import { BootstrapDropdown } from "../../../components/Reusable/BootstrapDropdown/BootstrapDropdown";
import { CustomButton } from "../../../components/Reusable/CustomButton/CustomButton";
import { useState } from "react";

export function ListFormListItem() {
  const [typeElementListValues, setTypeElementListValues] = useState(
    "Veuillez choisir un type"
  );
  //TODO voir comment centraliser le type de stock ou d'élément de la liste
  const typeElementLists = ["Légumes", "Viande", "Petit déjeuner"];

  function clickDropdownListTypeElementList(value) {
    setTypeElementListValues(value);
  }
  return (
    <>
      <div className="row">
        <div className="col-3"></div>
        <div
          className={`col-1 ${s.cellListsSubList} ${s.cellListsSubListbottom}`}
        >
          1
        </div>
        <div
          className={`col-2 ${s.cellListsSubList} ${s.cellListsSubListbottom}`}
        >
          <input type="text" className="form-control" />
        </div>
        <div
          className={`col-2 ${s.cellListsSubList} ${s.cellListsSubListbottom}`}
        >
          <BootstrapDropdown
            dropdownValues={typeElementListValues}
            clickDropDownAction={clickDropdownListTypeElementList}
            values={typeElementLists}
          />
        </div>
        <div
          className={`col-1 ${s.cellListsSubList} ${s.cellListsSubListbottom}`}
        >
          <input type="number" className={`${s.numberQuantityListItem}`} />
        </div>
        <div
          className={`col-2 ${s.cellListsSubList} ${s.cellListsSubListRight} ${s.cellListsSubListbottom}`}
        >
          <div className={`${s.actionsListsLittle}`}>
            <CustomButton
              labelButton={"Valider"}
              actionButton={() => alert("validation")}
              customClass={"btn btn-success"}
            />
            <CustomButton
              labelButton={"Supprimer"}
              actionButton={() => alert("suppression")}
              customClass={"btn btn-danger"}
            />
          </div>
        </div>
        <div className={`col-2`}></div>
      </div>
    </>
  );
}
