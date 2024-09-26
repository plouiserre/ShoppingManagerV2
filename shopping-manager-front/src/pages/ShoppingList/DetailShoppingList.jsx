import s from "./style.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailShoppingListItems } from "../../components/ShoppingList/DetailShoppingListItems/DetailShoppingListItems";
import { CustomButton } from "../../components/Reusable/CustomButton/CustomButton";

export function DetailShoppingList() {
  const params = useParams();
  const navigate = useNavigate();
  var id = parseInt(params.id);
  const shoppingLists = useSelector(
    (store) => store.SHOPPINGLIST.shoppingLists
  );
  const shoppingListSelected = shoppingLists.find((item) => item.id === id);

  function GoShoppingList() {
    navigate("/ShoppingList/");
  }

  function UpdateShoppingList() {
    navigate("/ShoppingList/edit/" + id);
  }
  return (
    <div className={`container-fluid`}>
      <div className={`row ${s.detailShoppingList}`}>
        <div className={`col-9 ${s.titleDetailShoppingList}`}>
          {shoppingListSelected.Name}
        </div>
        <div className={`col-3 ${s.statusShoppingListLabel}`}>
          {shoppingListSelected.status}
        </div>
      </div>
      <div className={`row ${s.headerShoppingListItems}`}>
        <div className={`col-4`}>Nom</div>
        <div className={`col-4`}>Type</div>
        <div className={`col-4`}>Quantité</div>
      </div>
      <DetailShoppingListItems
        shoppingListItems={shoppingListSelected.shoppingListItems}
      />
      <div className="row">
        <div className={`col-3 ${s.globalButton}`}>
          <CustomButton
            labelButton={"Liste des listes de courses"}
            actionButton={GoShoppingList}
            customClass={"btn btn-secondary btn-lg w-100"}
          />
        </div>
        <div class="col-6"></div>
        <div className={`col-3 ${s.globalButton}`}>
          <CustomButton
            labelButton={"Mettre à jour cette liste de course"}
            actionButton={UpdateShoppingList}
            customClass={"btn btn-primary btn-lg w-100"}
          />
        </div>
      </div>
    </div>
  );
}
