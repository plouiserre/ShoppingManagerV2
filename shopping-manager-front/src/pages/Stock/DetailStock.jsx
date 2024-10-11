import s from "./style.module.css";
import { Pictogramme } from "../../components/Reusable/Pictogramme/Pictogramme";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CustomButton } from "../../components/Reusable/CustomButton/CustomButton";
import { Status } from "../../components/Reusable/Status/Status";
import { DetailStockItemList } from "../../components/Stock/DetailStockItemList/DetailStockItemList";

export function DetailStock() {
  var navigate = useNavigate();
  var params = useParams();
  var id = parseInt(params.id);
  var stocks = useSelector((store) => store.STOCK.stocks);
  var stock = stocks.find((item) => item.Id === id);

  return (
    <div className={`container-fluid ${s.detailStock}`}>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-2">
          <Pictogramme pictoName={stock.Type} height={100} width={100} />
        </div>
        <div className={`col-4 ${s.stockName}`}>
          <div>{stock.Name}</div>
        </div>
        <div className="col-2"></div>
      </div>
      <div className={`row ${s.quantityStock}`}>
        <div className="col-3"></div>
        <div className="col-2">Quantité</div>
        <div className={`col-3 ${s.quantityNumber}`}>{stock.Quantity}</div>
        <div className="col-3"></div>
      </div>
      <div className={`row ${s.quantityStock}`}>
        <div className="col-3"></div>
        <div className="col-2">Status</div>
        <div className={`col-3 ${s.quantityNumber}`}>
          <Status element={stock} />
        </div>
        <div className="col-3"></div>
      </div>
      <div className={`row ${s.headerStockItems}`}>
        <div className={`col-4`}>Id</div>
        <div className={`col-4`}>Quantité</div>
        <div className={`col-4`}>Date de péremption</div>
      </div>
      <DetailStockItemList stockItems={stock.stockItems} />
      <div className="row">
        {" "}
        <div className="col-3">
          <CustomButton
            labelButton={"Listes des stocks"}
            actionButton={() => navigate("/stock/")}
            customClass={"btn btn-secondary btn-lg w-100"}
          />
        </div>
        <div className="col-6"></div>
        <div className="col-3">
          <CustomButton
            labelButton={"Mettre à jour cet élément"}
            actionButton={() => navigate("/stock/edit/" + id)}
            customClass={"btn btn-primary btn-lg w-100"}
          />
        </div>
      </div>
    </div>
  );
}
