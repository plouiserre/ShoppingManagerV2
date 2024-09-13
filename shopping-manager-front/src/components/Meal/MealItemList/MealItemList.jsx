import { MealItemByType } from "../MealItemByType/MealItemByType";

export function MealItemList({ mealItems }) {
  {
    function getType(typeName) {
      if (typeName === "meat") return "Viande";
      else if (typeName === "vegetables") return "Légumes";
      else return "Petit déjeuner";
    }
    var mealItemsByType = {};
    mealItems.map((item) => {
      if (mealItemsByType[item.stock.Type] === undefined) {
        mealItemsByType[item.stock.Type] = [];
      }
      mealItemsByType[item.stock.Type].push(item);
    });
    return Object.entries(mealItemsByType).map(([stockType, mealItems]) => {
      const typeStockLabel = getType(stockType);
      return (
        <>
          <MealItemByType mealItems={mealItems} />
        </>
      );
    });
  }
}
