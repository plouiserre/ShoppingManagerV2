import { useState } from "react";
import { AddElement } from "../../components/AddElement/AddElement";
import { ValidateStock } from "../../domain/validateStock";
import s from "./style.module.css";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { useDispatch } from "react-redux";
import { addStockItem } from "../../store/stock/stock-slice";
import { StockSubElement } from "../../components/StockSubElement/StockSubElement";

export function AddStock() {
  //var keys = [0];
  const dispatch = useDispatch();
  const [stock, setStock] = useState({
    Name: "",
    Type: "",
    Quantity: 1,
    DatePeremption: Date(),
  });

  const [buttonAddSubElement, setButtonAddSubElement] = useState([]);

  const [visibility, setVisibility] = useState(false);

  const [keys, setKeys] = useState([0]);

  //TODO rewrite this code
  function setType(stock) {
    if (stock.Type === "Viande blanche" || stock.Type === "Viande rouge")
      stock.Type = "meat";
    else if (stock.Type === "Légumes") stock.Type = "vegetables";
    else stock.Type = "breakfast";
  }

  function addSubElements() {
    var newKey = manageKeysSubElements();
    setButtonAddSubElement([
      ...buttonAddSubElement,
      <StockSubElement stock={stock} setStock={setStock} key={newKey} />,
    ]);
  }

  function manageKeysSubElements() {
    var lastKey = keys[keys.length - 1];
    var newKey = lastKey + 1;
    setKeys([...keys, newKey]);
    return newKey;
  }

  //TODO rewrite this code
  function saveStock() {
    var result = ValidateStock(stock);
    setVisibility(!result);
    if (result) {
      setType(stock);
      dispatch(addStockItem(stock));
    }
  }

  return (
    <div>
      <form className={`container-fluid ${s.formStock}`}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-7">
            <h1 className={`${s.titleForm}`}>Nouvel stock</h1>
          </div>
          <div className="col-2"></div>
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
              value={stock.Name}
              onChange={(event) =>
                setStock({ ...stock, Name: event.target.value })
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
              value={stock.Type}
              onChange={(event) => {
                setStock({ ...stock, Type: event.target.value });
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
        <StockSubElement stock={stock} setStock={setStock} />
        {buttonAddSubElement}
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-7">
            <AddElement
              labelButton={"Nouveaux sous éléments"}
              actionButton={() => addSubElements()}
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
