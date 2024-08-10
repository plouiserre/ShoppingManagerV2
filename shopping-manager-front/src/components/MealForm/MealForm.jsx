import s from "./style.module.css";
import { CustomButton } from "../CustomButton/CustomButton";
import { BootstrapDropdown } from "../BootstrapDropdown/BootstrapDropdown";
import { useState } from "react";

export function MealForm({ meal, setMeal }) {
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

  function clickDropdownlistDays(value) {
    setDropDownValueDays(value);
    setMeal({ ...meal, Day: value });
  }

  function clickDropdownListMoments(value) {
    setDropDownValueMoments(value);
    setMeal({ ...meal, Moment: value });
  }

  function saveMeal() {
    alert(meal.Day);
    alert(meal.Moment);
  }

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
              clickDropDownAction={clickDropdownlistDays}
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
              clickDropDownAction={clickDropdownListMoments}
              values={moments}
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-7">
            <CustomButton
              labelButton={"Enregistrer"}
              actionButton={() => saveMeal()}
            />
          </div>
          <div className="col-2"></div>
        </div>
      </form>
    </div>
  );
}
