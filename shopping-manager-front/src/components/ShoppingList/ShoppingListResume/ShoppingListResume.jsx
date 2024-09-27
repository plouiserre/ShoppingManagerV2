import { Resume } from "../../Global/Resume/Resume";
import { useSelector } from "react-redux";

export function ShoppingListResume() {
  const shoppingLists = useSelector(
    (store) => store.SHOPPINGLIST.shoppingLists
  );
  return (
    <Resume
      keyword={"shoppinglist"}
      address={"shoppingList"}
      elements={shoppingLists}
    />
  );
}
