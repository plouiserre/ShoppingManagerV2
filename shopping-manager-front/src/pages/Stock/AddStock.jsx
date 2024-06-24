import { useState } from "react";
import { AddElement } from "../../components/AddElement/AddElement";
import s from "./style.module.css";

export function AddStock() {
  const [stock, setStock] = useState({
    name: "",
    type: "",
    quantity: 1,
    datePeremption: Date(),
  });

  function saveStock() {
    console.log(
      stock.name +
        " " +
        stock.type +
        " " +
        stock.quantity +
        " " +
        stock.datePeremption
    );
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
                setStock({ ...stock, datePeremption: event.target.value });
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
