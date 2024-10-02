import { Status } from "../../Reusable/Status/Status";
import { Pictogramme } from "../../Reusable/Pictogramme/Pictogramme";
import s from "./style.module.css";

export function DetailMealItem({ mealItem }) {
  return (
    <div className={`${s.mealItemsByType}`}>
      <>
        <div className="row">
          <div className={`col-3 ${s.nameFood} ${s.cellList}`}>
            {mealItem.stock.Name}
          </div>
          <div className={`col-3 ${s.cellList}`}>
            <Pictogramme
              pictoName={mealItem.stock.Type}
              height={50}
              width={50}
            />
          </div>
          <div className={`col-3  ${s.cellList}`}>
            {mealItem.stock.Quantity}
          </div>
          <div className={`col-3 ${s.cellList}`}>
            <Status element={mealItem.stock} />
          </div>
        </div>
      </>
    </div>
  );
}
