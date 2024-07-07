import { ListResume } from "../../components/ListResume/ListResume";
import { MealResume } from "../../components/MealResume/MealResume";
import { StockResume } from "../../containers/StockResume/StockResume";
import s from "./style.module.css";

export function Welcome() {
  return (
    <div className={`row ${s.welcome}`}>
      <div className="col-6">
        <StockResume />
      </div>
      <div className="col-6">
        <div className={`${s.list}`}>
          <ListResume />
        </div>
        <MealResume />
      </div>
    </div>
  );
}
