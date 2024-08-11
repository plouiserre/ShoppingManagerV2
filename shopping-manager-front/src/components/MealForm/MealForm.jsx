import s from "./style.module.css";
import { CustomButton } from "../CustomButton/CustomButton";
import { BootstrapDropdown } from "../BootstrapDropdown/BootstrapDropdown";
import { useState } from "react";
import { useSelector } from "react-redux";

export function MealForm({ meal, setMeal }) {
  var defaultDropdownValue = "Sélectionner une valeur";
  const stocks = useSelector((store) => store.STOCK.stocks);
  const stocksName = [];
  //TODO externalize in the component
  const [typeStock, setTypeStock] = useState("Type");
  const [quantityMealItem, setQuantityMealItem] = useState(0);
  orderedStockName();
  function orderedStockName() {
    stocks.map((stock) => {
      stocksName.push(stock.Name);
    });
  }
  const [dropdownValueDays, setDropDownValueDays] =
    useState(defaultDropdownValue);
  const [dropdownValueMoments, setDropDownValueMoments] =
    useState(defaultDropdownValue);
  //TODO externalize in the component
  const [stocksValue, setStocksValue] = useState(defaultDropdownValue);
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

  //TODO externalise in the component
  function clickDropdownListStock(value) {
    setStocksValue(value);
    for (var i = 0; i < stocks.length; i++) {
      if (stocks[i].Name == value) {
        var stockType = getType(stocks[i].Type);
        setTypeStock(stockType);
        break;
      }
    }
  }

  //TODO factorize with the method in stockEdit.jsx
  function getType(typeName) {
    if (typeName === "meat") return "Viande";
    else if (typeName === "vegetables") return "Légumes";
    else return "Petit déjeuner";
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
            <div className={`col-2 ${s.cellMealsSubList}`}>
              <BootstrapDropdown
                dropdownValues={stocksValue}
                clickDropDownAction={clickDropdownListStock}
                values={stocksName}
              />
            </div>
            <div className={`col-2 ${s.cellMealsSubList}`}>{typeStock}</div>
            <div className={`col-1 ${s.cellMealsSubList}`}>
              <input
                type="number"
                value={quantityMealItem}
                onChange={(quantity) => {
                  setQuantityMealItem(quantity);
                }}
                className={`${s.numberQuantityMealItem}`}
              />
            </div>
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
