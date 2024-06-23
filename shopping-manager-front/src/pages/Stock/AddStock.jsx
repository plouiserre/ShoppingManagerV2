import { AddElement } from "../../components/AddElement/AddElement";
import s from "./style.module.css";

export function AddStock() {
  return (
    <div>
      <form className={`container-fluid ${s.formStock}`}>
        <div class="row">
          <div class="col-3"></div>
          <div class="col-7">
            <h1 className={`${s.titleForm}`}>Nouvel élément</h1>
            <div class="col-2"></div>
          </div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div class="col-3"></div>
          <div class="col-3">Nom</div>
          <div class="col-4">
            <input type="text" />{" "}
          </div>
          <div class="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div class="col-3"></div>
          <div class="col-3">Type</div>
          <div class="col-4">
            <select>
              <option>Légumes</option>
              <option>Viande rouge</option>
              <option>Viande blanche</option>
              <option>Petit déjeuner</option>
            </select>
          </div>
          <div class="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div class="col-3"></div>
          <div class="col-3">Quantité</div>
          <div class="col-4">
            <input type="text" />{" "}
          </div>
          <div class="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div class="col-3"></div>
          <div class="col-7">
            <AddElement
              labelButton={"Enregistrer"}
              actionButton={() => alert("ça enregistre")}
            />
          </div>
          <div class="col-2"></div>
        </div>
      </form>
    </div>
  );
}
