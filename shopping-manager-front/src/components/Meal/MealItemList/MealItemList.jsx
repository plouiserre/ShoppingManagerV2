import { MealItemByType } from "../MealItemByType/MealItemByType";

export function MealItemList({ mealItems }) {
  {
    var mealItemsByType = {};
    mealItems.map((item) => {
      if (mealItemsByType[item.stock.Type] === undefined) {
        mealItemsByType[item.stock.Type] = [];
      }
      mealItemsByType[item.stock.Type].push(item);
    });
    return Object.entries(mealItemsByType).map(([stockType, mealItems]) => {
      return (
        <>
          <MealItemByType mealItems={mealItems} />
        </>
      );
    });
  }
}
