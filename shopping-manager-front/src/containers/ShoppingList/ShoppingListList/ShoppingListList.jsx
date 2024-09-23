import s from "./style.module.css";
import { CustomButton } from "../../../components/Reusable/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingListItemList } from "../ShoppingListItemList/ShoppingListItemList";

export function ShoppingListList() {
  var navigate = useNavigate();
  var shoppingLists = useSelector((store) => store.SHOPPINGLIST.shoppingLists);
  return (
    <>
      <div className={`${s.allShoppingLists}`}>
        <div className={`row ${s.headerShoppingListsHeader}`}>
          <div className={`col-2 ${s.cellShoppingListList}`}>ID</div>
          <div className={`col-3 ${s.cellShoppingListList}`}>Nom</div>
          <div className={`col-2 ${s.cellShoppingListList}`}>Status</div>
          <div className={`col-2 ${s.cellShoppingListList}`}>Quantité</div>
          <div className={`col-3 ${s.cellShoppingListList}`}>Actions</div>
        </div>
        {shoppingLists.map((shoppingList) => {
          return <ShoppingListItemList shoppingListItem={shoppingList} />;
        })}
      </div>
      <div className="row">
        <div className="col-4">
          <CustomButton
            labelButton={"Ajouter un nouvel élément"}
            actionButton={() => navigate("/shoppinglist/add/")}
          />
        </div>
        <div className="col-8" />
      </div>
    </>
  );
}
