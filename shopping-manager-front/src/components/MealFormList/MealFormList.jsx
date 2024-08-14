import { MealFormListItem } from "../MealFormListItem/MealFormListItem";

export function MealFormList({ iteration }) {
  var ids = [];
  for (var i = 0; i < iteration; i++) {
    ids.push(i);
  }
  return (
    <>
      {ids.map((id) => {
        return <MealFormListItem idMealItem={id + 1} />;
      })}
    </>
  );
}
