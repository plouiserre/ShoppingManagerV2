import { useState } from "react";
import { AddElement } from "../../components/AddElement/AddElement";
import { ValidateStock } from "../../domain/validateStock";
import s from "./style.module.css";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export function AddStock() {
  const [stock, setStock] = useState({
    name: "",
    type: "",
    quantity: 1,
    datePeremption: Date(),
  });

  const [visibility, setVisibility] = useState(false);

  function saveStock() {
    var result = ValidateStock(stock);
    setVisibility(!result);
    if (result) {
      console.log(
        stock.name +
          " " +
          stock.type +
          " " +
          stock.quantity +
          " " +
          stock.datePeremption
      );
    } else {
      console.log("validation wrong");
    }
  }
  return (
    <div>
      <form className={`container-fluid ${s.formStock}`}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-7">
            <h1 className={`${s.titleForm}`}>Nouvel élément</h1>
            <div className="col-2"></div>
          </div>
        </div>
        {visibility && (
          <ErrorMessage messageError={"Le stock n'est pas valide"} />
        )}
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-3">Nom</div>
          <div className="col-4">
            <input
              type="text"
              value={stock.name}
              onChange={(event) =>
                setStock({ ...stock, name: event.target.value })
              }
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-3">Type</div>
          <div className="col-4">
            <select
              value={stock.type}
              onChange={(event) => {
                setStock({ ...stock, type: event.target.value });
              }}
            >
              <option>Sélectionner une valeur</option>
              <option>Légumes</option>
              <option>Viande rouge</option>
              <option>Viande blanche</option>
              <option>Petit déjeuner</option>
            </select>
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-3">Quantité</div>
          <div className="col-4">
            <input
              type="number"
              value={stock.quantity}
              onChange={(event) => {
                setStock({ ...stock, quantity: event.target.value });
              }}
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-3">Date de péremption</div>
          <div className="col-4">
            <input
              type="date"
              value={stock.datePeremption}
              onChange={(event) => {
                setStock({
                  ...stock,
                  datePeremption: event.target.value,
                  isDateSelected: true,
                });
              }}
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-7">
            <AddElement
              labelButton={"Enregistrer"}
              actionButton={() => saveStock()}
            />
          </div>
          <div className="col-2"></div>
        </div>
      </form>
    </div>
  );
}
