import { calculateStatusStock } from "./stock";

export function calculateMealStatus(meal){
    var okStatus = [];
    var warningStatus =[];
    var errorStatus = [];
    meal.mealItems.map((item)=>{
        const status = calculateStatusStock(item.stock)
        if(status ==="ok")
            okStatus.push(status)
        else if(status ==="warning")
            warningStatus.push(status)
        else
            errorStatus.push(status)
    })
    if (errorStatus.length >0)
        return "error"
    else if(warningStatus.length > 0)
        return "warning"
    else
        return "ok"
}