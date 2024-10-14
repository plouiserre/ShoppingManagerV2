export function calculateShoppingListQuantity(shoppingList){
    var quantity = 0
    shoppingList.shoppingListItems.map((item)=>{
        quantity += parseInt(item.quantity)
    })
    return quantity
}