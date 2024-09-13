import { Status } from "../../Reusable/Status/Status";
import { Pictogramme } from "../../Reusable/Pictogramme/Pictogramme";
import s from "./style.module.css";

export function MealItemByType({ typeStock, mealItems }) {
  const typeStockLabel = getType(typeStock);

  function getType(typeName) {
    if (typeName === "meat") return "Viande";
    else if (typeName === "vegetables") return "Légumes";
    else return "Petit déjeuner";
  }

  return (
    <div className={`${s.mealItemsByType}`}>
      {mealItems.map((item, i) => {
        return (
          <>
            <div className="row">
              <div className={`col-3 ${s.nameFood} ${s.cellList}`}>
                {item.stock.Name}
              </div>
              <div className={`col-3 ${s.cellList}`}>
                <Pictogramme
                  pictoName={item.stock.Type}
                  height={50}
                  width={50}
                />
              </div>
              <div className={`col-3  ${s.cellList}`}>
                {item.stock.Quantity}
              </div>
              <div className={`col-3 ${s.cellList}`}>
                <Status element={item.stock} />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}