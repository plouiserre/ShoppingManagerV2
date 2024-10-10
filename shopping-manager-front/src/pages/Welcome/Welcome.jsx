import { ShoppingListResume } from "../../containers/ShoppingList/ShoppingListResume/ShoppingListResume";
import { MealResume } from "../../containers/Meal/MealResume/MealResume";
import { StockResume } from "../../containers/Stock/StockResume/StockResume";
import s from "./style.module.css";

export function Welcome() {
  return (
    <div className={`row ${s.welcome}`}>
      <div className="col-6">
        <StockResume />
      </div>
      <div className="col-6">
        <div className={`${s.list}`}>
          <ShoppingListResume />
        </div>
        <MealResume />
      </div>
    </div>
  );
}
