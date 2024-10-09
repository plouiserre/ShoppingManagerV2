import { ErrorMessage } from "../../Global/ErrorMessage/ErrorMessage";
import { StockListForm } from "../StockListForm/StockListForm";
import { CustomButton } from "../../Reusable/CustomButton/CustomButton";
import s from "./style.module.css";
import { BootstrapDropdown } from "../../Reusable/BootstrapDropdown/BootstrapDropdown";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStockItemEmpty } from "../../../store/stock/stockitem-slice";
import { ValidateStock } from "../../../domain/validateStock";
import { addStock, editStock } from "../../../store/stock/stock-slice";
import { getTypeFoodId } from "../../../domain/manageFoodType";

//TODO déplacer dans containers
export function StockForm({ stock, setStock, defaultValueTypeStock }) {
  var initStock = stock !== undefined ? stock : {};
  var [stockWorking, setStockWorking] = useState(initStock);
  var dispatch = useDispatch();
  const navigate = useNavigate();
  const allTypesStock = ["Légumes", "Viande", "Petit déjeuner"];
  const stockItems = useSelector((store) => store.STOCKITEM.stockItems);
  const [visibility, setVisibility] = useState(false);
  const [errorMessageContent, setErrorMessageContent] = useState("");
  const [typeStock, setTypeStock] = useState(defaultValueTypeStock);

  function clickDropdownlist(value) {
    setStockWorking({ ...stockWorking, Type: value });
    setTypeStock(value);
  }

  function addNewStockItem() {
    dispatch(addStockItemEmpty());
  }

  function saveThisStock() {
    var result = ValidateStock(stockWorking, stockItems);
    setVisibility(!result.isValid);
    setErrorMessageContent(result.errorMessage);
    if (result.isValid) {
      stockWorking.Type = getTypeFoodId(stockWorking.Type);
      dispatch(addStock({ stock: stockWorking, stockItems: stockItems }));
      navigate("/stock/");
    }
  }

  function editThisStock() {
    var result = ValidateStock(stock, stockItems);
    setVisibility(!result.isValid);
    if (result.isValid) {
      var newStock = { ...stockWorking };
      newStock.Type = getTypeFoodId(newStock.Type);
      dispatch(editStock({ stock: newStock, stockItems: stockItems }));
      navigate("/stock/");
    }
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
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-3">Nom</div>
          <div className="col-3">
            <input
              type="text"
              value={stockWorking.Name}
              onChange={(event) =>
                setStockWorking({ ...stockWorking, Name: event.target.value })
              }
              className="form-control"
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
        <StockListForm stock={stockWorking} setStock={setStock} key={0} />
        {visibility && <ErrorMessage messageError={errorMessageContent} />}
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-7">
            <CustomButton
              customClass={"btn btn-info"}
              labelButton={"Nouveau composant du stock"}
              actionButton={() => addNewStockItem()}
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className={`row ${s.lineForm}`}>
          <div className="col-3"></div>
          <div className="col-7">
            {stock === undefined && (
              <CustomButton
                labelButton={"Enregistrer"}
                actionButton={() => saveThisStock()}
              />
            )}
            {stock !== undefined && (
              <CustomButton
                labelButton={"Mettre à jour"}
                actionButton={() => editThisStock()}
                customClass={"btn btn-secondary"}
              />
            )}
          </div>
          <div className="col-2"></div>
        </div>
      </form>
    </div>
  );
}
