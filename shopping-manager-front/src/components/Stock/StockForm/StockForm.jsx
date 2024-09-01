import { ErrorMessage } from "../../Global/ErrorMessage/ErrorMessage";
import { StockSubElement } from "../StockSubElement/StockSubElement";
import { CustomButton } from "../../Reusable/CustomButton/CustomButton";
import s from "./style.module.css";
import { BootstrapDropdown } from "../../Reusable/BootstrapDropdown/BootstrapDropdown";
import { useState } from "react";

export function StockForm({
  stock,
  visibility,
  setStock,
  saveStock,
  defaultValueTypeStock,
}) {
  const allTypesStock = ["Légumes", "Viande", "Petit déjeuner"];
  const [typeStock, setTypeStock] = useState(defaultValueTypeStock);
  function clickDropdownlist(value) {
    setStock({ ...stock, Type: value });
    setTypeStock(value);
  }
  return (
    <div>
      <form className={`container-fluid ${s.formStock}`}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-7">
            <h1 className={`${s.titleForm}`}>Mise à jour du stock</h1>
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
            <BootstrapDropdown
              clickDropDownAction={clickDropdownlist}
              dropdownValues={typeStock}
              values={allTypesStock}
            />
          </div>
          <div className="col-2"></div>
        </div>
        <StockSubElement stock={stock} setStock={setStock} key={0} />
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-7">
            <CustomButton
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
