import s from "./style.module.css";
import { CustomButton } from "../CustomButton/CustomButton";
import { BootstrapDropdown } from "../BootstrapDropdown/BootstrapDropdown";
import { useState } from "react";
import { Status } from "../Status/Status";

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
        <div className={`${s.mealsSub}`}>
          <div className={`row ${s.headerMealsSubList}`}>
            <div className={`col-3`}></div>
            <div
              className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListDarkBackgroundColor}`}
            >
              ID
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
              className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListDarkBackgroundColor}`}
            >
              Status
            </div>
            <div
              className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListRight} ${s.cellMealsSubListDarkBackgroundColor}`}
            >
              Actions
            </div>
            <div className={`col-2`}></div>
          </div>
          <div className={`row ${s.headerMealsSubList}`}>
            <div className={`col-3`}></div>
            <div className={`col-1 ${s.cellMealsSubList}`}>1</div>
            <div className={`col-2 ${s.cellMealsSubList}`}>Mouton</div>
            <div className={`col-2 ${s.cellMealsSubList}`}>Viande</div>
            <div className={`col-1 ${s.cellMealsSubList}`}>1</div>
            <div className={`col-1 ${s.cellMealsSubList}`}>OK</div>
            <div
              className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListRight}`}
            >
              Edit Supprimer
            </div>
            <div className={`col-2`}></div>
          </div>
          <div className={`row ${s.headerMealsSubList}`}>
            <div className={`col-3`}></div>
            <div
              className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom} ${s.cellMealsSubListDarkBackgroundColor}`}
            >
              2
            </div>
            <div
              className={`col-2 ${s.cellMealsSubList} ${s.cellMealsSubListbottom} ${s.cellMealsSubListDarkBackgroundColor}`}
            >
              Pâtes
            </div>
            <div
              className={`col-2 ${s.cellMealsSubList} ${s.cellMealsSubListbottom} ${s.cellMealsSubListDarkBackgroundColor}`}
            >
              Légumes
            </div>
            <div
              className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom} ${s.cellMealsSubListDarkBackgroundColor}`}
            >
              1
            </div>
            <div
              className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListbottom} ${s.cellMealsSubListDarkBackgroundColor}`}
            >
              OK
            </div>
            <div
              className={`col-1 ${s.cellMealsSubList} ${s.cellMealsSubListRight} ${s.cellMealsSubListbottom} ${s.cellMealsSubListDarkBackgroundColor}`}
            >
              Edit Supprimer
            </div>
            <div className={`col-2`}></div>
          </div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-7">
            <CustomButton
              labelButton={"Nouvel élément repas"}
              actionButton={() => alert("Nouvelle ligne")}
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
              actionButton={() => saveMeal()}
            />
          </div>
          <div className="col-2"></div>
        </div>
      </form>
    </div>
  );
}
