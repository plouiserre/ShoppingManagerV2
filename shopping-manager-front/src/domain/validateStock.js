export function ValidateStock(stock, stockItems){
    var result = ValidateStockName(stock)
    if (result.isValid){
        result =  ValidateStockType(stock) 
        if(result.isValid){
            result = ValidateStockItems(stockItems);
        }
    }
    return result
}

function ValidateStockName(stock){
    if(stock.Name === undefined || stock.Name === "")
        return {isValid : false, errorMessage : "Le stock n'a pas de nom défini!"};
    else
        return {isValid :true};
}

function ValidateStockType(stock){
    if(stock.Type === undefined || stock.Type ==="")
        return {isValid : false, errorMessage : "Le type du stock n'est pas valide!"};
    else
        return {isValid : true};
}

function ValidateStockItems(stockItems){
    var result =  ValidateStockItemDates(stockItems);
    if(result.isValid){
        result = ValidateStockItemsComplete(stockItems);
        if(result.isValid){
            result = ValidateStockItemsNotSameDateExpirated(stockItems);
        }
    }
    return result;
}

function ValidateStockItemDates(stockItems){
    var result = true;
    stockItems.map((item)=>{
        if(result){
            var datePeremption = new Date(item.DatePeremption)
            var dateNow = new Date()
            result = item.IsDateSelected && dateNow < datePeremption
        }
    })
    if(result){
        return {isValid :true};
    }
    else{
        return {isValid : false, errorMessage : "La date d'un des éléments du stock n'est pas valide!"};
    }
}

function ValidateStockItemsComplete(stockItems){
    var isCompleted = true;
    stockItems.map((item)=>{
        if (item.statusStockItem !=="Validation"){
            isCompleted = false;
        }
    })
    if(isCompleted){
        return {isValid :true};
    }else {
        return {isValid : false, errorMessage : "Un des éléments du stock n'a pas été validé!"};
    }
}

function ValidateStockItemsNotSameDateExpirated(stockItems){
    var isSamesDates = false;
    var dates = []
    stockItems.map((item)=>{
        if(dates.length>0){
            dates.map((oneDate)=>{
                if(oneDate === item.DatePeremption){
                    isSamesDates = true;
                }
            })
        }
        dates.push(item.DatePeremption);
    })
    if(isSamesDates)
        return {isValid : false, errorMessage : "Deux des éléments du stock ont la même date d'expiration!"};
    else
        return {isValid :true};
}