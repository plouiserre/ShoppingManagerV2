export function ValidateStock(stock){
    return ValidateStockName(stock) && ValidateStockType(stock) && ValidateDate(stock)
}

function ValidateStockName(stock){
    if(stock.name === undefined || stock.name === "")
        return false;
    else
        return true;
}

function ValidateStockType(stock){
    if(stock.type === undefined || stock.type ==="")
        return false;
    else
        return true;
}

function ValidateDate(stock){
    var datePeremption = new Date(stock.datePeremption)
    var dateNow = new Date()
    return stock.isDateSelected && dateNow < datePeremption
}