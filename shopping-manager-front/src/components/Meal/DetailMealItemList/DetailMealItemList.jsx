import { DetailMealItem } from "../DetailMealItem/DetailMealItem";

export function DetailMealItemList({ mealItems }) {
  var mealItemsByType = {};
  var mealItemsToDisplay = [];
  mealItems.map((item) => {
    if (mealItemsByType[item.stock.Type] === undefined) {
      mealItemsByType[item.stock.Type] = [];
    }
    mealItemsByType[item.stock.Type].push(item);
  });
  Object.entries(mealItemsByType).map(([key, mealItems]) => {
    mealItems.map((item) => {
      mealItemsToDisplay.push(item);
    });
  });
  return mealItemsToDisplay.map((item) => {
    return <DetailMealItem mealItem={item} />;
  });
}
