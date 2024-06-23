import { useState } from "react";
import { AddElement } from "../../components/AddElement/AddElement";
import s from "./style.module.css";

export function AddStock() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
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
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-3">Type</div>
          <div className="col-4">
            <select
              value={type}
              onChange={(event) => {
                setType(event.target.value);
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
              value={quantity}
              onChange={(event) => {
                setQuantity(event.target.value);
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
              actionButton={() =>
                console.log(name + " " + type + " " + quantity)
              }
            />
          </div>
          <div className="col-2"></div>
        </div>
      </form>
    </div>
  );
}
