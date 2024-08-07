import { useState } from "react";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { ValidateStock } from "../../domain/validateStock";
import s from "./style.module.css";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { editStock } from "../../store/stock/stock-slice";
import { StockSubElement } from "../../components/StockSubElement/StockSubElement";
import { useNavigate, useParams } from "react-router-dom";

//TODO factorize with AddStock
export function StockEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [visibility, setVisibility] = useState(false);

  const id = parseInt(params.id);
  var stockLoad = LoadDetail();
  var stockBdd = stockLoad[0];

  function LoadDetail() {
    var stocks = useSelector((store) => store.STOCK.stocks);
    return stocks.filter((item) => item.Id === id);
  }
  const [stock, setStock] = useState({
    Name: stockBdd.Name,
    Type: getType(stockBdd.Type),
    Quantity: stockBdd.Quantity,
    DatePeremption: stockBdd.DatePeremption,
  });

  function getType(typeName) {
    if (typeName == "meat") return "Viande blanche";
    else if (typeName == "vegetables") return "Légumes";
    else return "Petit déjeuner";
  }

  //TODO rewrite this code
  function setType(stock) {
    if (stock.Type === "Viande") stock.Type = "meat";
    else if (stock.Type === "Légumes") stock.Type = "vegetables";
    else stock.Type = "breakfast";
  }

  //TODO rewrite this code
  function saveStock() {
    stock.IsDateSelected = true;
    stock.Id = id;
    var result = ValidateStock(stock);
    setVisibility(!result);
    if (result) {
      setType(stock);
      dispatch(editStock(stock));
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
              <option>Viande</option>
              <option>Petit déjeuner</option>
            </select>
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
