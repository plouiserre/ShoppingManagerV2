export function calculateStatusStock(stock){
    var old = [];
    var nearlyOld = [];
    var ok = [];
    if (stock !== undefined && stock.stockItems !== undefined) {
      stock.stockItems.map((item) => {
        var peremtion = new Date(item.DatePeremption);
        var today = new Date();
        if (peremtion < today) {
          old.push(item);
        } else {
          var diffTime = Math.abs(peremtion - today);
          var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
          if (diffDays < 2) nearlyOld.push(item);
          else ok.push(item);
        }
      });

      if (old.length > 0) {
        return "error";
      } else if (
        (nearlyOld.length > 0 && ok.length == 0) ||
        (nearlyOld.length > 0 && ok.length > 0 && nearlyOld.length > ok.length)
      ) {
        return "warning";
      } else {
        return "ok";
      }
    }
}

export function calculateQuantityStock(stock){
  var quantity = stock.stockItems.length;
  return quantity;
}