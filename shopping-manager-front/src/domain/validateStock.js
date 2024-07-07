export function ValidateStock(stock){
    return ValidateStockName(stock) && ValidateStockType(stock) && ValidateDate(stock)
}

function ValidateStockName(stock){
    if(stock.Name === undefined || stock.Name === "")
        return false;
    else
        return true;
}

function ValidateStockType(stock){
    if(stock.Type === undefined || stock.Type ==="")
        return false;
    else
        return true;
}

function ValidateDate(stock){
    var datePeremption = new Date(stock.DatePeremption)
    var dateNow = new Date()
    return stock.IsDateSelected && dateNow < datePeremption
}