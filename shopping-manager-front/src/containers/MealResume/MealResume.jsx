import { useSelector } from "react-redux";
import { Resume } from "../../components/Global/Resume/Resume";

export function MealResume() {
  const meals = useSelector((store) => store.MEAL.meals);

  return <Resume keyword={"repas"} address={"meal"} elements={meals} />;
}
