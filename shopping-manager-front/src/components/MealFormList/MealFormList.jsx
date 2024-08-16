import { MealFormListItem } from "../MealFormListItem/MealFormListItem";

export function MealFormList({ mealItems }) {
  return (
    <>
      {mealItems.map((mealItem) => {
        return (
          <MealFormListItem mealItem={mealItem} key={mealItem.iteration} />
        );
      })}
    </>
  );
}
