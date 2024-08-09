import s from "./style.module.css";
import { CustomButton } from "../CustomButton/CustomButton";
import { BootstrapDropdown } from "../BootstrapDropdown/BootstrapDropdown";
import { useState } from "react";

export function MealForm() {
  var defaultDropdownValue = "Sélectionner une valeur";
  const [dropdownValueDays, setDropDownValueDays] =
    useState(defaultDropdownValue);
  const [dropdownValueMoments, setDropDownValueMoments] =
    useState(defaultDropdownValue);
  const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  const moments = ["Petit-déjeuner", "Déjeuner", "Goûter", "Dîner"];
  return (
    <div>
      <form className={`container-fluid ${s.formStock}`}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-7">
            <h1 className={`${s.titleForm}`}>Nouveau repas</h1>
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-3">Jour</div>
          <div className="col-4">
            <BootstrapDropdown
              dropdownValues={dropdownValueDays}
              setDropDownValues={setDropDownValueDays}
              values={days}
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-3">Moment</div>
          <div className="col-4">
            <BootstrapDropdown
              dropdownValues={dropdownValueMoments}
              setDropDownValues={setDropDownValueMoments}
              values={moments}
            />
            {/* <select>
              <option>Sélectionner une valeur</option>
              <option>Petit-déjeuner</option>
              <option>Déjeuner</option>
              <option>Goûter</option>
              <option>Dîner</option>
            </select> */}
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-7">
            <CustomButton
              labelButton={"Enregistrer"}
              actionButton={() => alert("nouveau repas enregistré!!!")}
            />
          </div>
          <div className="col-2"></div>
        </div>
      </form>
    </div>
  );
}
